import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'http://localhost:5191';

  constructor(private http: HttpClient, private router: Router) { }

  createOrUpdate(id: number | null, name: string, status: number): Observable<any> {
    const token = localStorage.getItem('userToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(this.apiUrl + "/api/project/createOrUpdate", { Id: id, Name: name, Active: status }, { headers }).pipe(
      tap(response => {
        if (response.success) {
          return response.user;
        }
      })
    );
  }
  getProjects(): Observable<any> {
    const token = localStorage.getItem('userToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(this.apiUrl + "/api/project/getAllByUser", { headers }).pipe(
      tap(response => {
        if (response.success) {
          return response.projects;
        }
      })
    );
  }
  
}
