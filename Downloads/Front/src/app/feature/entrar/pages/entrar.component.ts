import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/core/interfaces/Usuario';
import { EntrarService } from '../services/entrar.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {
  autenticado: boolean = false;
  userLogin: any = {};
  userLogged: any = {};
  isAuthenticated: boolean = false;

  constructor(private entrarService: EntrarService, private http: HttpClient) { }

  ngOnInit(): void {



  }

  Autenticar(login: Login){
    this.entrarService.postAutenticar(login).subscribe();
    if()
      this.autenticado = true;
    console.log("deu bom");
  }


}
