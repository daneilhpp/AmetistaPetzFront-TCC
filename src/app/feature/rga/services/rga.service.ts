import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { RGA } from 'src/app/core/interfaces/Rga';

@Injectable({
  providedIn: 'root'
})
export class RgaService {
  private apiUrl?: 'localhost:8080/rga';

  constructor(private http: HttpClient) { }

  private getHeaders() {
    return new HttpHeaders().append('Content-type', 'application/json');
}

  public getRgaMockList(): Observable<RgaAnimalType[]> {
    return of(rgaMock);
  }

  public getRgaList(): Observable<RGA[]> {
    return this.http.get<RGA[]>("http://localhost:5000/RGA/Listar", {headers: this.getHeaders()});
  }

  public getRgaById(rgaId: number): Observable<RgaAnimalType>{
    return this.http.get<RgaAnimalType>(`${this.apiUrl}/find/${rgaId}`);
  }

  public addRga(rgaAnimalType: RGA): Observable<RGA>{
    return this.http.post<RGA>("http://localhost:5000/RGA/Add", rgaAnimalType, {headers: this.getHeaders()});
  }

  public updateRga(rgaAnimalType: RgaAnimalType): Observable<RgaAnimalType>{
    return this.http.put<RgaAnimalType>(`${this.apiUrl}/update`,rgaAnimalType);
  }

  public deleteRga(rgaId: number): Observable<void>{
    return this.http.delete<void>(`http://localhost:5000/RGA/Remover/${rgaId}`, {headers: this.getHeaders()});
  }
}

export type RgaAnimalType = {
  id: number;
  nomeAnimal: string;
  sexo: string;
  especie: string;
  raca: string;
  cor: string;
  nascimento: Date;
  ass: string;
  pata: string;
  chip: number;
  rga: number;
  foto: string;
}
export const rgaMock: RgaAnimalType[] = [
  { id: 1, nomeAnimal: 'Rosa', sexo: 'Femea', especie: 'Canina', raca: 'Pitbull', cor: 'Marrom', nascimento:new Date(1666033027665), ass: 'assets/ass.png', pata: 'assets/patamock.svg', chip: 123456789123456, rga: 1234567, foto: 'assets/fotomock2.jpg'},
  { id: 2, nomeAnimal: 'Nome do Animal', sexo: 'Macho', especie: '??', raca: 'Elmo', cor: 'Vermelho', nascimento:new Date(1666033027665), ass: 'assets/ass.png', pata: 'assets/patamock.svg', chip: 124124241342453, rga: 1111111, foto: 'assets/fotomock.jpg' },
  { id: 3, nomeAnimal: 'Teste', sexo: 'Teste', especie: 'Teste', raca: 'Teste', cor: 'Teste', nascimento:new Date(1666033027665), ass: 'assets/ass.png', pata: 'assets/patamock.svg', chip: 111111111111111, rga: 2222222, foto: 'assets/fotomock2.jpg'}
];