import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

type UserTo = {
  email: string;
  password: string
}
@Injectable({
  providedIn: 'any'
})
export class EntrarService {

  constructor(private http: HttpClient) { }

  public login({ email, password }: UserTo): Observable<UserTo> {
    return this.http.post<UserTo>('', { email, password });
  }
}
