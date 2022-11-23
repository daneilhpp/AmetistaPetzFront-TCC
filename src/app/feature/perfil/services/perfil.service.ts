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
}

//Array de objetos do tipo
export const AnimalMock: AnimalType[] = [
  {id: 1, name: 'Thor', foto: 'assets/thor.jpg'},
  {id: 2, name: 'Pipoca', foto: 'assets/amora.jpg'},
  {id: 3, name: 'Seila', foto: 'assets/pipoca.jpg'}
];

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