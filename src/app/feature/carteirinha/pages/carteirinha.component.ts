import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil, switchMap } from 'rxjs';
import { Vaccine, Card } from 'src/app/core/interfaces/Carteirinha';
import { CardVaccineType, CarteirinhaService, VaccineAnimalType } from '../services/carteirinha.service';

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
  public vaccines$!: Vaccine[];
  //public vaccines$!: VaccineAnimalType[];
  private ngDestroyed$ = new Subject();
  public vaccineList!: Vaccine[];
  public cards$!: Card[];
  //public cards$!: CardVaccineType[];

  constructor(private carteirinhaService: CarteirinhaService) { }
  selectedItem = '';
  

  ngOnInit(): void {
     this.carteirinhaService.getAnimalVaccineList()
     .pipe(takeUntil(this.ngDestroyed$))
     .subscribe(animalData => this.vaccines$ = animalData); 
    /*this.carteirinhaService.getMock()
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe(animalData => this.vaccines$ = animalData);*/

      this.carteirinhaService.getVaccineCardList()
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe(cardData => this.cards$ = cardData)
    /* this.carteirinhaService.getMockCard()
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe(cardData => this.cards$ = cardData); */

    this.formAddModal = new window.bootstrap.Modal(
      document.getElementById("addVaccine")
    );
    
    this.removeModal = new window.bootstrap.Modal(
      document.getElementById("removeVaccine")
    );
  }


  openAddModal() {
    this.formAddModal.show();
  }
  closeAddModal() {
    //this.addAnimalVaccine();
    this.formAddModal.hide();
  }
  openRemoveModal() {
    this.removeModal.show();
  }
  closeRemoveModal() {
    //this.deleteAnimalVaccine(this.vaccines$.id);
    this.removeModal.hide();
  }

  openAddCardModal() {
    this.formAddCard.show();
  }
  closeAddCardModal() {
    //this.deleteAnimalVaccine(this.vaccines$.id);
    this.formAddCard.hide();
  }
  
  ngOnDestroy(): void {
    this.ngDestroyed$.next(true);
    this.ngDestroyed$.complete();
  }

  onSelected(value: string): void {
    this.selectedItem = value;
  }

  /* getAnimalVaccineList() {
    this.carteirinhaService.getAnimalVaccineList()
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe(vaccineData => this.vaccineList = vaccineData);
  } */

  addAnimalVaccine(vaccine: Vaccine): void {
    this.carteirinhaService.addAnimalVaccine(vaccine).subscribe();
    this.formAddModal.hide();
  }

  deleteAnimalVaccine(id: number) {
    this.carteirinhaService.deleteAnimalVaccine(id).subscribe();
    this.removeModal.hide();
  }

  deleteAllAnimalVaccine() {
    this.carteirinhaService.deleteAllAnimalVaccine();
  } 
  
}


