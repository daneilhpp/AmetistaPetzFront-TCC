import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  url='http://localhost:5000';
  constructor( private http: HttpClient ) { }
  saveUser( data: any ) {
    console.log( data );
    return this.http.post( this.url, data );
  }
}
