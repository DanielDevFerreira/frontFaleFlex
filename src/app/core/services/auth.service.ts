import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Token } from '../models/token.models';

@Injectable({ providedIn: 'root' })
export class AuthAuthenticationService {

    private currentUserSubject: BehaviorSubject<Token>;
    public currentUser: Observable<Token>;

    constructor(
        private http: HttpClient,
        private router: Router
    ) {
        this.currentUserSubject = new BehaviorSubject<Token>(JSON.parse(localStorage.getItem('token')!));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    /**
     * current user
     */
    public get currentUserValue(): Token {
        return this.currentUserSubject.value;
    }

    /**
     * Performs the auth
     * @param email email of user
     * @param password password of user
     */
    login(email: string, password: string) {
        //console.log('email:' + email, 'password:' + password)
        return this.http.post<any>(`${environment.api}/auth/signin`, { email, password })

            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                try {
                    if (user && user.token) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('token', JSON.stringify(user.token));
                        this.currentUserSubject.next(user.token);
                    }
                    return user.token;
                } catch (error) {
                    console.log('auth' + error);
                }
            }));
    }
    /**
     * Logout the user
     */
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
        localStorage.clear();
        this.currentUserSubject.next(null!);
        this.router.navigate(['/account/login']);
    }

    getTokenExpirationDate(token: string): Date {
        const decoded: any = jwt_decode(token);

        if (decoded.exp === undefined) {
            return null as any;
        }

        const date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    }

    //verificando se o token estar expirado
    isTokenExpired(token?: any): boolean {
        if (!token) {
            return true;
        }

        const date = this.getTokenExpirationDate(token);
        if (date === undefined) {
            return false;
        }

        return !(date.valueOf() > new Date().valueOf());
    }

    //verificando se o usuário estar logado
    isUserLoggedIn(token: any) {
        if (!token) {
            return false;
        } else if (this.isTokenExpired(token)) {
            return false
        }

        return true;
    }
}
