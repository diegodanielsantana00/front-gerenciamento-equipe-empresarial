import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = 'http://localhost:5191';

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/api/auth/login", { username: email, password }).pipe(
      tap(response => {
        if (response.success) {
          const token = response.token;
          localStorage.setItem('userToken', token);

          const payload = JSON.parse(atob(token.split('.')[1]));
          const exp = payload.exp * 1000;
          localStorage.setItem('tokenExp', exp.toString());

          this.autoLogout(exp - Date.now());
        }
      })
    );
  }

  register(email: string, password: string, name: string): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/api/auth/register", { name, email, password }).pipe(
      tap(response => {
        if (response.success) {
          const token = response.token;
          localStorage.setItem('userToken', token);

          const payload = JSON.parse(atob(token.split('.')[1]));
          const exp = payload.exp * 1000;
          localStorage.setItem('tokenExp', exp.toString());

          this.autoLogout(exp - Date.now());
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('tokenExp');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('userToken');
    const exp = localStorage.getItem('tokenExp');

    if (!token || !exp) return false;
    if (Date.now() > parseInt(exp)) {
      this.logout();
      return false;
    }
    return true;
  }

  autoLogout(ms: number) {
    setTimeout(() => this.logout(), ms);
  }
}
