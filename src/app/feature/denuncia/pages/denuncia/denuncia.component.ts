import { Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { of, Subject, takeUntil } from 'rxjs';
import { RGA } from 'src/app/core/interfaces/Rga';
import { Desaparecido, Animal, Especie, Raca, DesaparecidoSemRegistro } from 'src/app/core/interfaces/Animal';
import { DenunciaService } from '../../services/denuncia.service';
import { AnimalServiceService } from 'src/app/feature/carteirinha/services/animal-service.service';
import { RgaService } from 'src/app/feature/rga/services/rga.service';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

declare var window: any;

@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.component.html',
  styleUrls: ['./denuncia.component.css']
})
export class DenunciaComponent implements OnInit {
  addDesapModal!: any;
  addDesapSRModal!: any;
  private ngDestroyed$ = new Subject();
  public desaps$!: Desaparecido[];
  public desapsr$!: DesaparecidoSemRegistro[];
  public animals$!: Animal[];
  public rgas$!: RGA[];
  public espec$!: Especie[];
  public raca$!: Raca[];

  constructor(private denService: DenunciaService, private aniService: AnimalServiceService, private rgaService: RgaService) { }

  ngOnInit(): void {
    this.denService.getDesaparecidos()
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe(data => this.desaps$ = data);
    this.denService.getDesaparecidosSR()
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe(data => this.desapsr$ = data);
    this.aniService.getAnimals()
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe(data => this.animals$ = data);
    this.rgaService.getRgaList()
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe(data => this.rgas$ = data);
      
    this.aniService.getRacas()
    .pipe(takeUntil(this.ngDestroyed$))
    .subscribe(data => this.raca$ = data);
    this.aniService.getEspecies()
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe(data => this.espec$ = data);


    this.addDesapModal = new window.bootstrap.Modal(
      document.getElementById("openAddDesap")
    );
    this.addDesapSRModal = new window.bootstrap.Modal(
      document.getElementById("openAddDesapSR")
    );
  }

  openDesapModal() {
    this.addDesapModal.show();
  }
  closeDesapModal() {
    this.addDesapModal.hide();
  }

  openDesapSRModal() {
    this.addDesapSRModal.show();
  }

  ngOnDestroy(): void {
    this.ngDestroyed$.next(true);
    this.ngDestroyed$.complete();
  }

  /* getmock() {
    return of(Datas);
  } */

  addDesaparecido(desap: Desaparecido): void {
    this.denService.addDesaparecido(desap).subscribe();
    this.addDesapModal.hide();
  }
  addDesaparecidoSR(desap: DesaparecidoSemRegistro): void {
    this.denService.addDesaparecidoSR(desap).subscribe();
    this.addDesapSRModal.hide();
  }


  animal = [
    {
      name: 'Marquinhos',
      especie: 'Cachorro',
      raca: 'Akita',
      desap: new Date(Date.now()),
      local: 'Vila Maria',
      tel: 123456789,
      foto: 'assets/fotomock2.jpg',
      dono: 'Daniel'
    }
  ];

}