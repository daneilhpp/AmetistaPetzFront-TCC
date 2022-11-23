import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { RgaAnimalType, RgaService } from '../services/rga.service';

declare var window: any;

@Component({
  selector: 'app-rga',
  templateUrl: './rga.component.html',
  styleUrls: ['./rga.component.css']
})
export class RgaComponent implements OnInit {
  formAddModal: any;
  removeModal: any;
  editModal: any;
  public rgas$!: RgaAnimalType[];

  private ngDestroyed$ = new Subject();

  constructor(private rgaService: RgaService) { }

  ngOnInit(): void {
    this.rgaService.getRgaList()
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe(rgaData => this.rgas$ = rgaData);

      this.formAddModal = new window.bootstrap.Modal(
        document.getElementById("addRga")
      );
      this.removeModal = new window.bootstrap.Modal(
        document.getElementById("removeRga")
      );
      this.editModal = new window.bootstrap.Modal(
        document.getElementById("editRga")
      );
  }

  ngOnDestroy(): void {
    this.ngDestroyed$.next(true);
    this.ngDestroyed$.complete();
  }

  openAddModal(){
    this.formAddModal.show();
  }
  closeAddModal(){
    //this.addAnimalVaccine();
    this.formAddModal.hide();
  }
  openEditModal(){
    this.editModal.show();
  }
  closeEditModal(){
    //this.addAnimalVaccine();
    this.editModal.hide();
  }
  openRemoveModal(){
    this.removeModal.show();
  }
  closeRemoveModal(){
    //this.deleteAnimalVaccine(this.animals$.id);
    this.removeModal.hide();
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
