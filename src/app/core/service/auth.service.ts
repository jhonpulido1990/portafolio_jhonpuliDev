import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl = environment.apiUrl + '/auth';
  private http = inject(HttpClient);

  private tokenService = inject(TokenService);

  register(registerData: { username: string, password: string } ): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, registerData);
  }

  login(loginData: { username: string, password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, loginData).pipe(
      tap((response: any) => {
        this.tokenService.setToken(response.token)
      })
    );
  }

  verifyToken(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', token)
    return this.http.get(`${this.baseUrl}/verify-token`, { headers } );
  }

  changePassword(changeData: { username: string, password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/changepassword`, changeData);
  }
}
