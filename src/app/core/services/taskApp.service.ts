import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskAppService {
  private apiUrl = 'http://localhost:5191';

  constructor(private http: HttpClient, private router: Router) { }

  GetAllTasks(idProject: number, status: number, orderBy: number, page: number): Observable<any> {
    const token = localStorage.getItem('userToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(this.apiUrl + "/api/taskApp/GetAllTask?idProject=" + idProject + "&page=" + page + "&orderBy=" + orderBy + "&status=" + status, { headers }).pipe(
      tap(response => {
        if (response.success) {
          return response;
        }
      })
    );
  }

  createOrUpdate(task: {
    id: number,
    name: string,
    title: string,
    description: string,
    storyPoints: number,
    userResponsible: number,
    statusTask: number,
    priorityTask: number
  }): Observable<any> {
    const token = localStorage.getItem('userToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(this.apiUrl + "/api/taskApp/createOrUpdate", { ...task }, { headers }).pipe(
      tap(response => {
        if (response.success) {
          return response;
        }
      })
    );
  }

  Delete(id: number): Observable<any> {
    const token = localStorage.getItem('userToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<any>(this.apiUrl + "/api/taskApp/delete?id=" + id, { headers }).pipe(
      tap(response => {
        if (response.success) {
          return response;
        }
      })
    );
  }

}
