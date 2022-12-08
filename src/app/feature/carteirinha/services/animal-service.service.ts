import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Animal, Especie, Raca, Sexos, Situacao } from '../../../core/interfaces/Animal';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class AnimalServiceService {

  constructor(private http: HttpClient) { }

  private getHeaders() {
    return new HttpHeaders().append('Content-type', 'application/json');
  }
    
  public getAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>("http://localhost:5000/Animais/Listar", {headers: this.getHeaders()});
  }
  public addAnimal(animal: Animal): Observable<Animal>{
    return this.http.post<Animal>("http://localhost:5000/Animais/Add", animal, {headers: this.getHeaders()});
  }
  public deleteAnimal(id: number): Observable<void>{
    return this.http.delete<void>(`http://localhost:5000/Animais/Delete/${id}`, {headers: this.getHeaders()})
  }

  public getSexos(): Observable<Sexos[]> {
    return this.http.get<Sexos[]>("http://localhost:5000/Animais/Sexos", {headers: this.getHeaders()});
  }
  public getEspecies(): Observable<Especie[]> {
    return this.http.get<Especie[]>("http://localhost:5000/Animais/Especies", {headers: this.getHeaders()});
  }
  public getRacas(): Observable<Raca[]> {
    return this.http.get<Raca[]>("http://localhost:5000/Animais/Racas", {headers: this.getHeaders()});
  }
}
