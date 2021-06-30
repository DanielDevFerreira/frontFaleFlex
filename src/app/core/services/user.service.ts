import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/auth.models';
import { environment } from 'src/environments/environment';
import { Token } from '../models/token.models';
import { ForgotPassword } from '../models/forgotPassword';



@Injectable({ providedIn: 'root' })
export class UserProfileService {
    confirmEmailUrl: string = '';
    constructor(private http: HttpClient) { }
    /***
     * Get All User
     */
    getAll() {
        return this.http.get<User[]>(`api/users`);
    }

    /***
     * Facked User Register
     */
    register(user: User) {
       // console.log( user );
        return this.http.post<any>(`${environment.api}/auth/signup`, user);
    }

    activeEmail(token: Token){
       // console.log('user ' + token);
         return this.http.post<any>(`${environment.api}/auth/email-active`, token);
    }

    forgotPassword(forgotPassword: ForgotPassword){
        let headers = new HttpHeaders({
            'confirmEmailUrl': this.confirmEmailUrl
        });
        let options = { headers: headers};

        return this.http.post<any>(`${environment.api}/auth/forgot-password`, forgotPassword, options);
    }

    changePassword(id: number, password: string){
        console.log(id, password)
        return this.http.post<any>(`${environment.api}/auth/change-password`, {id, password});
    }

    verifyToken(tokenConfirm: string){
        return this.http.post<any>(`${environment.api}/auth/verify-token`, {tokenConfirm});
    }
}