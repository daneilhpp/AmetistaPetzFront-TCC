import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carteirinha',
  templateUrl: './carteirinha.component.html',
  styleUrls: ['./carteirinha.component.css']
})
export class CarteirinhaComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
  }

  nomeAnimal = 'Nome do Animal';
  id = 1;
  vacina = 'teste';
  data = '00/00/0000';
  prox = '00/00/0000';
}
