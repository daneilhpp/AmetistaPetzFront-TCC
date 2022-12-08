import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Login } from 'src/app/core/interfaces/Usuario';
import { EntrarService } from '../services/entrar.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {
  autenticado: boolean = false;
  erro: boolean = false;
  userLogin: any = {};
  userLogged: any = {};
  isAuthenticated: boolean = false;
  public loginForm!: FormGroup;

  public response!: Login[] | number;

  constructor(
    private entrarService: EntrarService,
    private formBuilder: FormBuilder,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      passwordString: ['', [Validators.required, Validators.maxLength(255), Validators.minLength(10)]]
    })
  }

  enviarFormulario() {
    // fçam um interceptor pra pegar o jwt e trafegar na aplicação 
    if (this.loginForm.valid) {
      const dadoDoLogin = this.loginForm.getRawValue();
      console.log(dadoDoLogin);
      this.entrarService.postAutenticar(dadoDoLogin)
        .subscribe(
          { complete: () => {
            // aqui ce vai bota a rota p mandar pro outro canto
            this.route.navigate(['/perfil']);
          } }
        );
      console.log(this.response);
      if (this.response != 1)
        this.autenticado = true;
      else
        this.erro = true;
    }
  }


}
