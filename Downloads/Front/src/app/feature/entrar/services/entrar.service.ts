import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario, Login} from 'src/app/core/interfaces/Usuario';
import { HttpHeaders } from '@angular/common/http';

type UserTo = {
  name: string;
  password: string
}
@Injectable({
  providedIn: 'any'
})
export class EntrarService {

  constructor(private http: HttpClient) { }

  public login({ name, password }: UserTo): Observable<UserTo> {
    return this.http.post<UserTo>('', { name, password });
  }

  private getHeaders() {
    return new HttpHeaders().append('Content-type', 'application/json');
  }

  public postAutenticar(login: Login): Observable<Login[]>{
    return this.http.post<Login[]>("http://localhost:5000/Usuarios/Autenticar", login, {headers: this.getHeaders()});
    
  }

  //authenticate(data) {
  //  return this.http.post(this.module + '/Autenticar', data);
 //}

}
