import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from './models/login.model';
import { RegisterModel } from './models/register.model';

const appKey = 'kid_SkPFmIQS7';
const appSecret = '7e7ed88bae2843bba5ccd29aa525e681';
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {

    }

    login(payload: LoginModel): Observable<Object> {
        return this.http.post<object>(loginUrl, JSON.stringify(payload), {
            headers: this.createAuthHeaders('Basic')
        });
    }

    register(payload: RegisterModel): Observable<Object> {
        return this.http.post<object>(registerUrl, JSON.stringify(payload), {
            headers: this.createAuthHeaders('Basic')
        });
    }

    logout(): Observable<Object> {
        return this.http.post<object>(logoutUrl, {}, {
            headers: this.createAuthHeaders('Kinvey')
        });
    }

    checkIfLogged() {
        return this.getAuthtoken() !== null;
    }

    getAuthtoken(): string {
        return localStorage.getItem('authToken');
    }

    getUsername(): string {
        return localStorage.getItem('username');
    }

    getUserId(): string {
        return localStorage.getItem('userId');
    }

    saveSession(res: object): void {
        localStorage.setItem('username', res['username']);
        localStorage.setItem('authToken', res['_kmd']['authtoken']);
        localStorage.setItem('userId', res['_id']);
    }

    clearSession(): void {
        localStorage.clear();
    }

    private createAuthHeaders(type: string) {
        if (type === 'Basic') {
            return new HttpHeaders({
                'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
                'Content-Type': 'application/json'
            });
        } else {
            return new HttpHeaders({
                'Authorization': `Kinvey ${localStorage.getItem('authToken')}`,
                'Content-Type': 'application/json'
            });
        }
    }
}