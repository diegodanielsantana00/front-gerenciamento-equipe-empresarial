import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StatusTaskService {
  private apiUrl = 'http://localhost:5191';

  constructor(private http: HttpClient, private router: Router) { }

  getAllStatusByProject(id: number): Observable<any> {
    const token = localStorage.getItem('userToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(this.apiUrl + "/api/statusTask/getAllStatusByProject?idProject=" + id , { headers }).pipe(
      tap(response => {
        if (response.success) {
          return response.status;
        }
      })
    );
  }

  createOrUpdate(id: number | null, name: string, order: number, project: number): Observable<any> {
    const token = localStorage.getItem('userToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(this.apiUrl + "/api/statusTask/createOrUpdate", { Id: id, Name: name, project, order }, { headers }).pipe(
      tap(response => {
        if (response.success) {
          return response;
        }
      })
    );
  }

}
