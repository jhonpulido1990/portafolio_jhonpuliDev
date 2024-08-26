import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { TokenService } from './token.service';
import { UserAuth } from '../model/interface/user.interfaces';
import { AuthStatus } from '../model/interface/authStatus.interface';
import { CheckTokenResponse } from '../model/interface/checktoken.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl = environment.apiUrl + '/auth';
  private http = inject(HttpClient);
  private tokenService = inject(TokenService);

  private _currentUser = signal<UserAuth | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.cheking);

  public currentUser = computed(() => this._currentUser());
  public authStatus = computed(() => this._authStatus());

  isLocalStorageAvailable(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  constructor() {
    if (this.isLocalStorageAvailable()) {
      this.checkAuthStatus().subscribe();
    }
  }

  checkAuthStatus(): Observable<boolean> {
    const url = `${this.baseUrl}/verify-token`;
    const token = localStorage.getItem('token');
    if (!token) {
      this.tokenService.clearToken();
      return of(false);
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<CheckTokenResponse>(url, { headers }).pipe(
      map(({ token, username }) => this.setAuthentication(username, token)),
      // Error
      catchError(() => {
        this._authStatus.set(AuthStatus.notAuthenticated);
        localStorage.removeItem('token');
        return of(false);
      })
    );
  }

  private setAuthentication(user: UserAuth, token: string): boolean {
    this._currentUser.set(user);
    this._authStatus.set(AuthStatus.authenticated);
    localStorage.setItem('token', token);
    return true;
  }

  register(registerData: {
    username: string;
    password: string;
  }): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, registerData);
  }

  login(loginData: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, loginData).pipe(
      tap((response: any) => {
        this.tokenService.setToken(response.token);
      }),
      map(({ username, token }) => this.setAuthentication(username, token))
    );
  }

  changePassword(changeData: {
    username: string;
    password: string;
  }): Observable<any> {
    return this.http.post(`${this.baseUrl}/changepassword`, changeData);
  }

  logout() {
    localStorage.removeItem('token');
    this._currentUser.set(null);
    this._authStatus.set(AuthStatus.notAuthenticated);
  }
}
