import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { of, Subject, takeUntil } from 'rxjs';
import { RgaAnimalType, RgaService } from 'src/app/feature/rga/services/rga.service';
import { RGA } from 'src/app/core/interfaces/Rga';
import jsPDF from 'jspdf';

declare var window: any;

@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.component.html',
  styleUrls: ['./denuncia.component.css']
})
export class DenunciaComponent implements OnInit {
  createModal: any;
  public rgas$!: RGA[];
  private ngDestroyed$ = new Subject();

  public anis$!: DataType[];

  constructor(private rgaService: RgaService) { }

  ngOnInit(): void {
    /* this.rgaService.getRgaList()
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe(rgaData => this.rgas$ = rgaData); */
      this.getmock().pipe(takeUntil(this.ngDestroyed$)).subscribe(data => this.anis$ = data);
    this.createModal = new window.bootstrap.Modal(
      document.getElementById("openCreate")
    );

  }
  openCreateModal() {
    this.createModal.show();
  }
  closeSaveModal() {
    //this.addAnimalVaccine();
    this.createModal.hide();
  }

  getmock(){
    return of(Datas);
  }
  
  
  

}

export type DataType = {
  name: string;
  especie: string;
  raca: string;
  desap: Date;
  local: string;
  tel: number;
  foto: string;
  dono: string;
}

export const Datas: DataType[] = [
  {name: 'Marquinhos', especie: 'Cachorro',raca: 'Akita', desap: new Date(Date.now()), local: 'Vila Maria', tel: 123456789, foto: 'https://www.petlove.com.br/images/breeds/193433/profile/original/akita_p.jpg?1532538103', dono: 'Daniel'}
]
