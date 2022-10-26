import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RgaService {
  private apiUrl?: 'localhost:8080/rga';

  constructor(private http: HttpClient) { }

  public getRgaList(): Observable<RgaAnimalType[]> {
    return of(rgaMock);
  }

  public getRgaById(rgaId: number): Observable<RgaAnimalType>{
    return this.http.get<RgaAnimalType>(`${this.apiUrl}/find/${rgaId}`);
  }

  public addRga(rgaAnimalType: RgaAnimalType): Observable<RgaAnimalType>{
    return this.http.post<RgaAnimalType>(`${this.apiUrl}/add`,rgaAnimalType);
  }

  public updateRga(rgaAnimalType: RgaAnimalType): Observable<RgaAnimalType>{
    return this.http.put<RgaAnimalType>(`${this.apiUrl}/update`,rgaAnimalType);
  }

  public deleteRga(rgaId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/delete/${rgaId}`);
  }
}

export type RgaAnimalType = {
  nomeAnimal: string;
  sexo: string;
  especie: string;
  raca: string;
  cor: string;
  nascimento: number;
  ass: string;
  pata: string;
  chip: number;
  rga: number;
  foto: string;
}
export const rgaMock: RgaAnimalType[] = [
  { nomeAnimal: 'Rosa', sexo: 'Femea', especie: 'Canina', raca: 'Pitbull', cor: 'Marrom', nascimento: Date.now(), ass: 'assets/ass.png', pata: 'assets/patamock.svg', chip: 123456789123456, rga: 1234567, foto: 'assets/fotomock2.jpg'},
  { nomeAnimal: 'Nome do Animal', sexo: 'Macho', especie: '??', raca: 'Elmo', cor: 'Vermelho', nascimento: Date.now(), ass: 'assets/ass.png', pata: 'assets/patamock.svg', chip: 124124241342453, rga: 1111111, foto: 'assets/fotomock.jpg' },
  { nomeAnimal: 'Teste', sexo: 'Teste', especie: 'Teste', raca: 'Teste', cor: 'Teste', nascimento: Date.now(), ass: 'assets/ass.png', pata: 'assets/patamock.svg', chip: 111111111111111, rga: 2222222, foto: 'assets/fotomock2.jpg'}
];