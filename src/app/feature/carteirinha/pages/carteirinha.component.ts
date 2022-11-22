import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject, takeUntil, switchMap } from 'rxjs';
import { Vaccine, Card } from 'src/app/core/interfaces/Carteirinha';
import { Animal } from 'src/app/core/interfaces/Animal';
import { CardVaccineType, CarteirinhaService, VaccineAnimalType } from '../services/carteirinha.service';
import { AnimalServiceService } from 'src/app/feature/carteirinha/services/animal-service.service';

declare var window: any;

@Component({
  selector: 'app-carteirinha',
  templateUrl: './carteirinha.component.html',
  styleUrls: ['./carteirinha.component.css']
})
export class CarteirinhaComponent implements OnInit, OnDestroy {
  formAddModal: any;
  formAddCard: any;
  removeModal: any;
  removeCard: any;
  public vaccines$!: Vaccine[];
  //public vaccines$!: VaccineAnimalType[];
  private ngDestroyed$ = new Subject();
  public vaccineList!: Vaccine[];
  public cards$!: Card[];
  public animals$!: Animal[];
  public animalDropDown$!: Animal[];
  public animalDropDown2$!: Animal[];
  //public cards$!: CardVaccineType[];

  constructor(private carteirinhaService: CarteirinhaService, private animalService: AnimalServiceService) { }
  selectedItem = '';
  selectedItem2 = '';
  

  ngOnInit(): void {
     this.carteirinhaService.getAnimalVaccineList()
     .pipe(takeUntil(this.ngDestroyed$))
     .subscribe(animalData => this.vaccines$ = animalData); 

      this.carteirinhaService.getVaccineCardList()
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe(cardData => this.cards$ = cardData);

      this.animalService.getAnimals()
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe(an => this.animals$ = an);
      this.animalService.getAnimals()
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe(an => this.animalDropDown$ = an);

    this.formAddModal = new window.bootstrap.Modal(
      document.getElementById("addVaccine")
    );
    this.formAddCard = new window.bootstrap.Modal(
      document.getElementById("addCard")
    );   
    this.removeModal = new window.bootstrap.Modal(
      document.getElementById("removeVaccine")
    );
    this.removeCard = new window.bootstrap.Modal(
      document.getElementById("removeCard")
    );
  }


  openAddModal() {
    this.formAddModal.show();
  }
  closeAddModal() {
    this.formAddModal.hide();
  }

  openRemoveModal() {
    this.removeModal.show();
  }
  closeRemoveModal() {
    this.removeModal.hide();
  }

  openAddCardModal() {
    this.formAddCard.show();
  }
  closeAddCardModal() {
    this.formAddCard.hide();
  }

  openRemoveCard() {
    this.removeCard.show();
  }
  closeRemoveCard() {
    this.removeCard.hide();
  }

  
  ngOnDestroy(): void {
    this.ngDestroyed$.next(true);
    this.ngDestroyed$.complete();
  }

  onSelected(value: string): void {
    this.selectedItem = value;
  }
  onSelected2(value: string): void {
    this.selectedItem2 = value;
  }

  addAnimalVaccine(vaccine: Vaccine): void {
    this.carteirinhaService.addAnimalVaccine(vaccine).subscribe();
    this.formAddModal.hide();
    this.formAddModal.reset();
  }

  deleteAnimalVaccine(id: number) {
    this.carteirinhaService.deleteAnimalVaccine(id).subscribe();
    this.removeModal.hide();
    this.removeModal.reset();
  }

  deleteAllAnimalVaccine() {
    this.carteirinhaService.deleteAllAnimalVaccine();
  }


  getCards(){
    this.carteirinhaService.getVaccineCardList().subscribe();
    this.animals$ = this.animalDropDown$;
    this.animals$.sort(function (a, b) {
      return a.id - b.id;
    });
    this.cards$.sort(function (a, b) {
      return a.id - b.id;
    });
  }
  addCard(card: Card): void {
    this.carteirinhaService.addVaccineCard(card).subscribe();
    this.formAddCard.hide();
    this.formAddCard.reset();
  }
  deleteCard(id: number) {
    this.carteirinhaService.deleteVaccineCard(id).subscribe();
    this.removeCard.hide();
    this.removeCard.reset();
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
          this.cards$.sort(function (a, b) {
            return +new Date(a.dataAdicao) - +new Date(b.dataAdicao);
          }) &&
          this.animals$.sort(function (a, b) {
            return +new Date(a.dataAdicao) - +new Date(b.dataAdicao);
          });

        this.filtered = antigo;
        break;

      case v = '2':
        var recente =
          this.cards$.sort(function (a, b) {
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
        this.getCards();
        break;
    }
  }
}


