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
  sexo = 'Macho';
  especie = '??';
  raca = 'Elmo';
  cor = 'Vermelho';
  nascimento = '00/0000';
  ass = 'assets/ass.png'
  pata = 'assets/patamock.svg'
  chip = 123456789123456;
  rga = 1234567;
  foto = 'assets/fotomock2.jpg';
}
