import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  public animalDropDown$!: Animal[];

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
    this.animalService.getAnimals()
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe(an => this.animalDropDown$ = an);

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

  openAddModal() {
    this.formAddModal.show();
  }
  closeAddModal() {
    //this.addAnimalVaccine();
    this.formAddModal.hide();
  }
  openEditModal() {
    this.editModal.show();
  }
  closeEditModal() {
    //this.addAnimalVaccine();
    this.editModal.hide();
  }
  openRemoveModal() {
    this.removeModal.show();
  }
  closeRemoveModal() {
    //this.deleteAnimalVaccine(this.animals$.id);
    this.removeModal.hide();
  }

  getRGA() {
    this.rgaService.getRgaList().subscribe();
    this.animals$ = this.animalDropDown$;
    this.animals$.sort(function (a, b) {
      return a.id - b.id;
    });
    this.rgas$.sort(function (a, b) {
      return a.idRGA - b.idRGA;
    });
  }

  deleteRGA(id: number) {
    this.rgaService.deleteRga(id).subscribe();
    this.removeModal.hide();
  }

  addRGA(rga: RGA) {
    this.rgaService.addRga(rga).subscribe();
    this.formAddModal.hide();
  }

  onSelected(value: string): void {
    this.selectedItem = value;
  }

  public selectedCard: any;
  public selecionado() {
    this.animals$ = this.animalDropDown$.filter((item) => item.nome === this.selectedCard);
  }

  public filtered: any;
  public filters() {
    var e = (document.getElementById('filterby')) as HTMLSelectElement;
    var s = e.selectedIndex;
    var o = e.options[s];
    var v = (<HTMLSelectElement><unknown>o).value;

    switch (v) {
      case v = '1':
        var antigo =
          this.rgas$.sort(function (a, b) {
            return +new Date(a.dataAdicao) - +new Date(b.dataAdicao);
          }) &&
          this.animals$.sort(function (a, b) {
            return +new Date(a.dataAdicao) - +new Date(b.dataAdicao);
          });

        this.filtered = antigo;
        break;

      case v = '2':
        var recente =
          this.rgas$.sort(function (a, b) {
            return +new Date(b.dataAdicao) - +new Date(a.dataAdicao);
          }) &&
          this.animals$.sort(function (a, b) {
            return +new Date(b.dataAdicao) - +new Date(a.dataAdicao);
          });

        this.filtered = recente;
        break;

      case v = '3':
        var alfabetico =
          this.animals$.sort(function (a, b) {
            return a.nome.localeCompare(b.nome);
          });

        this.filtered = alfabetico;
        break;
      default:
        this.getRGA();
        break;
    }
  }



  public filtrarRecente() {
    this.rgas$.sort(function (a, b) {
      return +new Date(b.dataAdicao) - +new Date(a.dataAdicao);
    });
    this.animals$.sort(function (a, b) {
      return +new Date(b.dataAdicao) - +new Date(a.dataAdicao);
    });
  }
  public filtrarAntigo() {
    this.rgas$.sort(function (a, b) {
      return +new Date(a.dataAdicao) - +new Date(b.dataAdicao);
    });
    this.animals$.sort(function (a, b) {
      return +new Date(a.dataAdicao) - +new Date(b.dataAdicao);
    });
  }
  public filtrarAlfabetico() {
    this.animals$.sort(function (a, b) {
      return a.nome.localeCompare(b.nome);
    });
  }

  public selectOnChange() {
    var e = (document.getElementById('selectAddAnimal')) as HTMLSelectElement;
    var s = e.selectedIndex;
    var o = e.options[s];
    var v = (<HTMLSelectElement><unknown>o).value;

 }
}
