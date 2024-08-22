import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private isLocalStorageAvailable(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  private tokenKey = 'auth-token';

  setToken(token: string): void {
    if (this.isLocalStorageAvailable()) localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    if (this.isLocalStorageAvailable()) return localStorage.getItem(this.tokenKey);
    return null;
  }

  clearToken(): void {
    if (this.isLocalStorageAvailable()) localStorage.removeItem(this.tokenKey);
  }
}
