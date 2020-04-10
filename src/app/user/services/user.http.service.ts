import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {
  constructor(private http: HttpClient) {}

  loadUsers(index: number, size: number): Observable<User[]> {
    return this.http.get<User[]>('/api/users', {
      params: new HttpParams()
        .set('_page', index.toString())
        .set('_limit', size.toString())
    });
  }
}
