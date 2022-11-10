import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Desaparecido } from 'src/app/core/interfaces/Animal';

@Injectable({
  providedIn: 'root'
})
export class DenunciaService {

  constructor(private http: HttpClient) { }

  private getHeaders() {
    return new HttpHeaders().append('Content-type', 'application/json');
  }

  public getDesaparecidos(): Observable<Desaparecido[]> {
    return this.http.get<Desaparecido[]>("http://localhost:5000/Denuncia/ListarD", { headers: this.getHeaders() });
  }

  public addDesaparecido(desaparecido: Desaparecido): Observable<Desaparecido>{
    return this.http.post<Desaparecido>("http://localhost:5000/Denuncia/Salvar", desaparecido, {headers: this.getHeaders()});
  }
}
