import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rga',
  templateUrl: './rga.component.html',
  styleUrls: ['./rga.component.css']
})
export class RgaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nomeAnimal = 'Nome do Animal';
  id = 1;
  vacina = 'teste';
  data = '00/00/0000';
  prox = '00/00/0000';
}
