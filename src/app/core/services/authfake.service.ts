import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/auth.models';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthfakeauthenticationService {

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    /**
     * current user
     */
    public get currentUserValue(): User {
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
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null!);
    }
}
