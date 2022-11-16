import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { of, Subject, takeUntil } from 'rxjs';
import { RGA } from 'src/app/core/interfaces/Rga';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Desaparecido, Animal } from 'src/app/core/interfaces/Animal';
import { DenunciaService } from '../../services/denuncia.service';
import { AnimalServiceService } from 'src/app/feature/carteirinha/services/animal-service.service';
import { RgaService } from 'src/app/feature/rga/services/rga.service';

declare var window: any;

@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.component.html',
  styleUrls: ['./denuncia.component.css']
})
export class DenunciaComponent implements OnInit {
  createModal: any;
  private ngDestroyed$ = new Subject();
  public desaps$!: Desaparecido[];
  public animals$!: Animal[];
  public rgas$!: RGA[];

  constructor(private denService: DenunciaService, private aniService: AnimalServiceService, private rgaService: RgaService) { }

  ngOnInit(): void {
    this.denService.getDesaparecidos()
    .pipe(takeUntil(this.ngDestroyed$))
    .subscribe(data => this.desaps$ = data);
    this.aniService.getAnimals()
    .pipe(takeUntil(this.ngDestroyed$))
    .subscribe(data => this.animals$ = data);
    this.rgaService.getRgaList()
    .pipe(takeUntil(this.ngDestroyed$))
    .subscribe(data => this.rgas$ = data);
          //this.getmock().pipe(takeUntil(this.ngDestroyed$)).subscribe(data => this.anis$ = data);

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

  addDesaparecido(desap: Desaparecido){
    this.denService.addDesaparecido(desap);
    
  }
  
  
  @ViewChild('htmlData') htmlData!: ElementRef;
  animal = [
    {
      name: 'Marquinhos',
      especie: 'Cachorro',
      raca: 'Akita', 
      desap: new Date(Date.now()), 
      local: 'Vila Maria', 
      tel: 123456789, 
      foto: 'assets/fotomock2.jpg', 
      dono: 'Daniel'}
  ];

  /* public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas: { height: number; width: number; toDataURL: (arg0: string) => any; }) => {
      let fileWidth = 270;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight, );
      PDF.save('Cartaz_Desaparecimento.pdf');
    });
  } */

  public openPDF(){
    let DATA: any = document.getElementById('htmlData');
    var imageDataURL: any;
    var image = new Image();

    image = DATA;

    image.onload = function(){
      let w = image.naturalWidth;
      let h = image.naturalHeight;

      const pdf = new jsPDF({
        orientation: h > w ? "portrait": "landscape",
        unit: "px",
        format: [h,w]
      });
      pdf.addImage(imageDataURL, 0, 0, pdf.internal.pageSize.getWidth(),pdf.internal.pageSize.getHeight());
      pdf.save('Cartaz_Desaparecimento.pdf');
    }
    image.src = imageDataURL;
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
