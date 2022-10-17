import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class CarteirinhaService {
  private apiUrl?: 'http://localhost:5000/api/Carteirinha';
  private AnimalVaccine = new Observable<VaccineAnimalType>();
  private VaccineCard = new Observable<VaccineCardType>();

  constructor(private http: HttpClient) { }

  public getVaccineCardList(): Observable<VaccineCardType[]> {
    return this.http.get<VaccineCardType[]>(`${this.apiUrl}/Listar`);
  }

  public getVaccineCardById(cardId: number): Observable<VaccineCardType>{
    return this.http.get<VaccineCardType>(`${this.apiUrl}/${cardId}`);
  }

  public addVaccineCard(vaccineCardType: VaccineCardType): Observable<VaccineCardType>{
    return this.http.post<VaccineCardType>(`${this.apiUrl}/Add`,vaccineCardType);
  }

  public deleteVaccineCard(cardId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/ApagarVacinas/${cardId}`);
  }

  
  public getAnimalVaccineList(): Observable<VaccineCardType[]> {
    return this.http.get<VaccineCardType[]>(`${this.apiUrl}/Vacina/Listar`);
  }

  public addAnimalVaccine(vaccineAnimalType: VaccineAnimalType): Observable<VaccineAnimalType>{
    return this.http.post<VaccineAnimalType>(`${this.apiUrl}/Vacina/Add`,vaccineAnimalType);
  }

  public deleteAnimalVaccine(cardId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/Vacina/ApagarVacinas/${cardId}`);
  }
  
  public deleteAllAnimalVaccine(): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/Vacina/ApagarVacinas`);
  }
}

export type VaccineCardType = {
  VaccineAnimalType: any;
}

export type VaccineAnimalType = {
  animalName: string;
  id: number;
  vaccine: string;
  vaccineDate: number;
  nextVaccineDate: number;
}
export const vaccineCardMock: VaccineAnimalType[] = [
  { animalName: 'name', id: 1, vaccine: 'test', vaccineDate: Date.now(), nextVaccineDate: Date.now() },
  { animalName: 'name', id: 2, vaccine: 'test', vaccineDate: Date.now(), nextVaccineDate: Date.now() },
  { animalName: 'name', id: 3, vaccine: 'test', vaccineDate: Date.now(), nextVaccineDate: Date.now() },
  { animalName: 'name', id: 4, vaccine: 'test', vaccineDate: Date.now(), nextVaccineDate: Date.now() },
  { animalName: 'name', id: 5, vaccine: 'test', vaccineDate: Date.now(), nextVaccineDate: Date.now() },
  { animalName: 'name', id: 6, vaccine: 'test', vaccineDate: Date.now(), nextVaccineDate: Date.now() },
  { animalName: 'name', id: 7, vaccine: 'test', vaccineDate: Date.now(), nextVaccineDate: Date.now() },
  { animalName: 'name', id: 8, vaccine: 'test', vaccineDate: Date.now(), nextVaccineDate: Date.now() },
  { animalName: 'name', id: 9, vaccine: 'test', vaccineDate: Date.now(), nextVaccineDate: Date.now() },
  { animalName: 'name', id: 10, vaccine: 'test', vaccineDate: Date.now(), nextVaccineDate: Date.now() },
  { animalName: 'name', id: 11, vaccine: 'test', vaccineDate: Date.now(), nextVaccineDate: Date.now() },
  { animalName: 'name', id: 12, vaccine: 'test', vaccineDate: Date.now(), nextVaccineDate: Date.now() },
  { animalName: 'name', id: 13, vaccine: 'test', vaccineDate: Date.now(), nextVaccineDate: Date.now() },
];

export const vaccineCardMock2: VaccineAnimalType[] = [
  { animalName: 'name', id: 1, vaccine: 'teste', vaccineDate: Date.now(), nextVaccineDate: Date.now() },
  { animalName: 'name', id: 2, vaccine: 'teste', vaccineDate: Date.now(), nextVaccineDate: Date.now() },
  { animalName: 'name', id: 3, vaccine: 'teste', vaccineDate: Date.now(), nextVaccineDate: Date.now() },
  { animalName: 'name', id: 4, vaccine: 'teste', vaccineDate: Date.now(), nextVaccineDate: Date.now() },
  { animalName: 'name', id: 5, vaccine: 'teste', vaccineDate: Date.now(), nextVaccineDate: Date.now() },
  { animalName: 'name', id: 6, vaccine: 'teste', vaccineDate: Date.now(), nextVaccineDate: Date.now() },
  { animalName: 'name', id: 7, vaccine: 'teste', vaccineDate: Date.now(), nextVaccineDate: Date.now() },
  { animalName: 'name', id: 8, vaccine: 'teste', vaccineDate: Date.now(), nextVaccineDate: Date.now() },
  { animalName: 'name', id: 9, vaccine: 'teste', vaccineDate: Date.now(), nextVaccineDate: Date.now() },
  { animalName: 'name', id: 10, vaccine: 'teste', vaccineDate: Date.now(), nextVaccineDate: Date.now() },
  { animalName: 'name', id: 11, vaccine: 'teste', vaccineDate: Date.now(), nextVaccineDate: Date.now() },
  { animalName: 'name', id: 12, vaccine: 'teste', vaccineDate: Date.now(), nextVaccineDate: Date.now() },
  { animalName: 'name', id: 13, vaccine: 'teste', vaccineDate: Date.now(), nextVaccineDate: Date.now() },
];

/* export const CardList: VaccineCardType = [
  vaccineCardMock, vaccineCardMock2
]; */
