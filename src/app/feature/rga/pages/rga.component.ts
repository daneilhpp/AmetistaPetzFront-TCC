import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { RgaAnimalType, RgaService } from '../services/rga.service';

@Component({
  selector: 'app-rga',
  templateUrl: './rga.component.html',
  styleUrls: ['./rga.component.css']
})
export class RgaComponent implements OnInit {
  public rgas$!: RgaAnimalType[];

  private ngDestroyed$ = new Subject();

  constructor(private rgaService: RgaService) { }

  ngOnInit(): void {
    this.rgaService.getRgaList()
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe(rgaData => this.rgas$ = rgaData);
  }

  ngOnDestroy(): void {
    this.ngDestroyed$.next(true);
    this.ngDestroyed$.complete();
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
