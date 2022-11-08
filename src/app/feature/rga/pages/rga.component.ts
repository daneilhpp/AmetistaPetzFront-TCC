import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { RgaAnimalType, RgaService } from '../services/rga.service';
import { RGA } from 'src/app/core/interfaces/Rga';
import { Animal, Especie, Raca, Sexos } from 'src/app/core/interfaces/Animal';
import { AnimalServiceService } from '../../carteirinha/services/animal-service.service'

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
  public rgas$!: RGA[];
  public animals$!: Animal[];

  public especies$!: Especie[];
  public racas$!: Raca[];
  public sexos$!: Sexos[];

  private ngDestroyed$ = new Subject();

  constructor(private rgaService: RgaService, private animalService: AnimalServiceService) { }
  selectedItem = '';

  ngOnInit(): void {
    this.rgaService.getRgaList()
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe(rgaData => this.rgas$ = rgaData);

      this.animalService.getAnimals()
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe(an => this.animals$ = an);

      this.animalService.getEspecies()
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe(es => this.especies$ = es);
      this.animalService.getRacas()
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe(rc => this.racas$ = rc);
      this.animalService.getSexos()
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe(sx => this.sexos$ = sx);      

      this.formAddModal = new window.bootstrap.Modal(
        document.getElementById("addRga")
      );
      this.removeModal = new window.bootstrap.Modal(
        document.getElementById("removeRga")
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

  deleteRGA(id: number){
    this.rgaService.deleteRga(id).subscribe();
    this.removeModal.hide();
  }

  addRGA(rga: RGA){
    this.rgaService.addRga(rga).subscribe();
    this.formAddModal.hide();
  }

  onSelected(value: string): void {
    this.selectedItem = value;
  }
}
