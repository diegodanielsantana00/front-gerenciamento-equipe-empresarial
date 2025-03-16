import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5191';

  constructor(private http: HttpClient, private router: Router) { }

  me(): Observable<any> {
    const token = localStorage.getItem('userToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<any>(this.apiUrl + "/api/auth/me", { headers }).pipe(
      tap(response => {
        if (response.success) {
          return response.user;
        }
      })
    );
  }
}
