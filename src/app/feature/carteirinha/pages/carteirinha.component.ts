import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil, switchMap } from 'rxjs';
import { CarteirinhaService, VaccineAnimalType } from '../services/carteirinha.service';

declare var window: any;

@Component({
  selector: 'app-carteirinha',
  templateUrl: './carteirinha.component.html',
  styleUrls: ['./carteirinha.component.css']
})
export class CarteirinhaComponent implements OnInit, OnDestroy {
  formAddModal: any;
  removeModal: any;
  public animals$!: VaccineAnimalType[];
  private ngDestroyed$ = new Subject();
  public vaccineList!: VaccineAnimalType[];

  constructor(private carteirinhaService: CarteirinhaService) { }

  ngOnInit(): void {
    this.carteirinhaService.getMock()
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe(animalData => this.animals$ = animalData);

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
    //this.deleteAnimalVaccine(this.animals$.id);
    this.removeModal.hide();
  }

  
  ngOnDestroy(): void {
    this.ngDestroyed$.next(true);
    this.ngDestroyed$.complete();
  }

  getAnimalVaccineList() {
    this.carteirinhaService.getAnimalVaccineList()
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe(vaccineData => this.vaccineList = vaccineData);
  }

  addAnimalVaccine(vaccineAnimalType: VaccineAnimalType) {
    this.carteirinhaService.addAnimalVaccine(vaccineAnimalType).subscribe();
  }

  deleteAnimalVaccine(id: number) {
    this.carteirinhaService.deleteAnimalVaccine(id).subscribe();
  }

  deleteAllAnimalVaccine() {
    this.carteirinhaService.deleteAllAnimalVaccine();
  }
}


