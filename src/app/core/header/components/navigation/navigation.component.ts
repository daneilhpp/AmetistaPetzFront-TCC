import { Component, OnInit } from '@angular/core';
import { EntrarComponent } from 'src/app/feature/entrar/pages/entrar.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  autenticado!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}

