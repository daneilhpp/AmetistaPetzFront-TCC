import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Animal } from 'src/app/core/interfaces/Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'any'
})
export class PerfilService {

  constructor(private http: HttpClient) { }

  //esse metodo é o que devolve os headers, ele é padrao ent n precisa entender ele.
  private getHeaders() {
    return new HttpHeaders().append('Content-type', 'application/json');
  }

  //metodo que retorna o array
  public getMock(): Observable<AnimalType[]>{
    return of(AnimalMock);
  }

  //metodo que vai usar o back end. Nota que eu passei que ele precisa retornar um Animal[]
  public getAllAnimal(): Observable<Animal[]>{
    return this.http.get<Animal[]>("http://localhost:5000/Perfil/Listar", {headers: this.getHeaders()});
                                    // bem aqui
  }
}

//Tipo
export type AnimalType = {
  id: number;
  name: string;
  foto: string;  
  rga: number;
}

//Array de objetos do tipo
export const AnimalMock: AnimalType[] = [
  {id: 22, name: 'Thor', rga: 9876543, foto: 'https://fofuxo.com.br/_upload/content/2013/04/11/van-turco-51674f933975d.jpg'},
  {id: 1, name: 'Simba', rga: 1234567, foto: 'https://i.pinimg.com/736x/2a/bc/97/2abc97995b3495aea688c9157a30fb3a.jpg'},
  {id: 3, name: 'Anita', rga: 1234567, foto: 'https://doglife.sydle.one/api/1/blog/_classId/5d66ed07e7c98a556a499a36/_download/62503f2ae20bba47b2995545/62503e3ab820e763c727dde3?accessToken=eyJhbGciOiJIUzUxMiJ9.eyJjb2RlIjoiNWU5NzY2Y2M0MThhMmI3MTc1NGQ4M2U5IiwibG9naW4iOiJibG9nLmRvZ2xpZmUiLCJuYW1lIjoiQmxvZyBEb2dMaWZlIiwiX29yZ0lkIjoiNWQ2YmJhM2IzZTM4ZTg3NjgzNGY5Y2NmIiwiX2NsYXNzIjp7ImNsYXNzUGFja2FnZUlkZW50aWZpZXIiOiJfc3lzdGVtIiwiX2lkIjoiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyIiwiX2NsYXNzSWQiOiIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAiLCJjbGFzc0lkZW50aWZpZXIiOiJfY2xhc3MifSwiX2NyZWF0aW9uRGF0ZSI6IjIwMjAtMDUtMjBUMjA6NDg6MzIuNzMxWiIsIl9sYXN0VXBkYXRlRGF0ZSI6IjIwMjAtMTEtMDZUMTQ6MDQ6MTguMTAxWiIsIl9sYXN0VXBkYXRlVXNlciI6eyJjbGFzc1BhY2thZ2VJZGVudGlmaWVyIjoiX3N5c3RlbSIsIl9pZCI6IjVlYzU2ZTVkMTkwZGFkMTQ2NmMwNzZhZSIsIl9jbGFzc0lkIjoiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyIiwiY2xhc3NJZGVudGlmaWVyIjoiX3VzZXIifSwiX2NsYXNzUmV2aXNpb24iOiJlY2YyYmFmNWM5YjQ5NWM5ZDZkYjE0ZmFjZWRjMjAxMCIsIl9yZXZpc2lvbiI6IjVmYTU1N2UyMDAxMmYyMGU1ZGIyZTQ3YyIsImFjdGl2ZSI6dHJ1ZSwib3JnYW5pemF0aW9uSWQiOiJkb2dsaWZlIiwiYXV0aGVudGljYXRpb25DbGFzcyI6Il9zeXN0ZW0uX3VzZXIiLCJ0b2tlblZlcnNpb24iOjE2LCJpc0FwcER5bmFtaWNBdXRoVG9rZW4iOmZhbHNlLCJpYXQiOjE2MTU4MTUzMDIsImlzcyI6Imp3Iiwic3ViIjoiYWNjZXNzVG9rZW4ifQ.94GMea_byYtt2quY3O9rCcK8bjymzaLjT2VQzWQkP-5nYtbp_34tcSEXN1xt1SG1ZnXgeo0RDL-iROTcIoH2wg'}
];

export type UsuarioType = {
  id: number;
  name: string;
  foto: string;  
  rga: number;
}
/*
    oq eu fiz aqui foi o seguinte, criei um tipo, fiz um array de objetos desse tipo, e criei um metodo que
    retorna esse array.

    blz
   */


    /*
      ta, agora eu fiz o seguinte, criei um arquivo .ts de Animal, que é igual esse AnimalType, só que
      fica melhor colocar em outro arquivo, e tambem pq interface é melhor.
      Depois eu fiz um metodo que usa o metodo do back, um get, com o link do http request.
      provavelmente n tem esse metodo no back, entao n vai funcionar, mas quando tiver vai funcionar.
      dentro dele eu tive que passar os headers, que são permissões que o back precisa que envie pra poder
      liberar o uso desse metodo.
    */