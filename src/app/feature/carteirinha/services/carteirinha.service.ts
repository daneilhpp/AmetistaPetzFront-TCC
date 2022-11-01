import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Animal, Especie, Raca, Situacao } from '../../../core/interfaces/Animal';
import { Vaccine, Card } from '../../../core/interfaces/Carteirinha';
import { Usuario } from '../../../core/interfaces/Usuario';

@Injectable({
  providedIn: 'any'
})
export class CarteirinhaService {
  private apiUrl?: 'http://localhost:5000/api/Carteirinha';

  constructor(private http: HttpClient) { }

  private getHeaders() {
    return new HttpHeaders().append('Content-type', 'application/json');
}

  public getMock(): Observable<VaccineAnimalType[]> {
    return of(vaccineCardMock);
  }

  public getMockCard(): Observable<CardVaccineType[]> {
    return of(CardVaccine);
  }

  public getVaccineCardList(): Observable<Card[]> {
    return this.http.get<Card[]>("http://localhost:5000/api/Carteirinha/Card/Listar", {headers: this.getHeaders()});
  }

  // public getVaccineCardById(cardId: number): Observable<VaccineCardType>{
  //   return this.http.get<VaccineCardType>(`${this.apiUrl}/${cardId}`);
  // }

  // public addVaccineCard(vaccineCardType: VaccineCardType): Observable<VaccineCardType>{
  //   return this.http.post<VaccineCardType>(`${this.apiUrl}/Add`,vaccineCardType);
  // }

  public deleteVaccineCard(cardId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/ApagarVacinas/${cardId}`);
  }

  
  public getAnimalVaccineList(): Observable<Vaccine[]> {
    return this.http.get<Vaccine[]>("http://localhost:5000/api/Carteirinha/Listar", {headers: this.getHeaders()});
  }

  public addAnimalVaccine(vaccine: Vaccine): Observable<Vaccine>{
    return this.http.post<Vaccine>("http://localhost:5000/api/Carteirinha/AddV",vaccine, {headers: this.getHeaders()});
  }

  public deleteAnimalVaccine(cardId: number): Observable<void>{
    return this.http.delete<void>(`http://localhost:5000/api/Carteirinha/${cardId}`);
    
  }
  
  public deleteAllAnimalVaccine(): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/Vacina/ApagarVacinas`);
  }
}



export type VaccineAnimalType = {
  id: number;
  vaccine: string;
  vaccineDate: Date;
  nextVaccineDate: Date;
  idAnimal: number;
}
export const vaccineCardMock: VaccineAnimalType[] = [
  { id: 1, vaccine: 'teste1', vaccineDate: new Date(1666033027665), nextVaccineDate: new Date(1666033027665),idAnimal: 1 },
  { id: 2, vaccine: 'teste2', vaccineDate: new Date(1666033027665), nextVaccineDate: new Date(1666033027665),idAnimal: 1 },
  { id: 3, vaccine: 'teste3', vaccineDate: new Date(1666033027665), nextVaccineDate: new Date(1666033027665),idAnimal: 1 },
];
export const vaccineCardMock2: VaccineAnimalType[] = [
  { id: 1, vaccine: 'tetano', vaccineDate: new Date(1666033027665), nextVaccineDate: new Date(1666033027665),idAnimal: 2 },
  { id: 2, vaccine: 'raiva', vaccineDate: new Date(1666033027665), nextVaccineDate: new Date(1666033027665),idAnimal: 2 },
  { id: 3, vaccine: 'peste', vaccineDate: new Date(1666033027665), nextVaccineDate: new Date(1666033027665),idAnimal: 2 },
  { id: 4, vaccine: 'pulga', vaccineDate: new Date(1666033027665), nextVaccineDate: new Date(1666033027665),idAnimal: 2 },
];

export var CardInfo: Array<VaccineAnimalType[]> = [
  vaccineCardMock, vaccineCardMock2
]

let mapVaccines;

for(let i = 1; i < CardInfo.length; i++) {
    mapVaccines = CardInfo[i].forEach(card => {
        return {
            id: card.id, vaccine: card.vaccine, vaccineDate: card.vaccineDate, nextVaccineDate: card.nextVaccineDate, idAnimal: card.idAnimal
        };
    });
  }
export type CardVaccineType = {
  id: number;
  idAnimal: number;
  animalName: string;
  animalVaccines: typeof mapVaccines;
}

export const CardVaccine: CardVaccineType[] = [
  { id: 1, animalName: 'Teste', animalVaccines: mapVaccines, idAnimal: 1 },
  { id: 2, animalName: 'Rosa', animalVaccines: mapVaccines, idAnimal: 2 }
]

/* const ids = vaccineCardMock.map((obj) => obj.id);
const vaccines = vaccineCardMock.map((obj) => obj.vaccine);
const vdates = vaccineCardMock.map((obj) => obj.vaccineDate);
const vndates = vaccineCardMock.map((obj) => obj.nextVaccineDate); */

/* const ids2 = vaccineCardMock2.map((obj) => obj.id);
const vaccines2 = vaccineCardMock2.map((obj) => obj.vaccine);
const vdates2 = vaccineCardMock2.map((obj) => obj.vaccineDate);
const vndates2 = vaccineCardMock2.map((obj) => obj.nextVaccineDate); */


/* export const mapVaccines2 = [
  {ids2, vaccines2, vdates2, vndates2}
]; */
/* function filterById(){
  const cardInfoId = mapVaccines!.map((ciId: { ids: any; }) => ciId.ids);
  const cardId = CardVaccine.map((cId) => cId.id);
  if(cardInfoId == cardId)
    return cardInfoId;
} */
