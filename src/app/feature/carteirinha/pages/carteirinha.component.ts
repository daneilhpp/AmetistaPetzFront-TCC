import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CarteirinhaService, VaccineAnimalType } from '../services/carteirinha.service';

@Component({
  selector: 'app-carteirinha',
  templateUrl: './carteirinha.component.html',
  styleUrls: ['./carteirinha.component.css']
})
export class CarteirinhaComponent implements OnInit, OnDestroy {
  public animals$!: VaccineAnimalType[];
  //private ngDestroyed$ = new Subject();

  constructor(private carteirinhaService: CarteirinhaService) { }

  ngOnInit(): void {
    // this.carteirinhaService.getAnimalVaccineList()
    //   .pipe(takeUntil(this.ngDestroyed$))
    //   .subscribe(carteirinhaData => this.animals$ = carteirinhaData);
  }

  ngOnDestroy(): void {
    // this.ngDestroyed$.next(true);
    // this.ngDestroyed$.complete();
  }

  getAnimalVaccineList(){
    this.carteirinhaService.getAnimalVaccineList();
  }
  
  addAnimalVaccine(vaccineAnimalType: VaccineAnimalType){
    //this.carteirinhaService.addAnimalVaccine(this.animals$.push(...vaccineAnimalType: VaccineAnimalType[]));
  }

  deleteAnimalVaccine(id: number){
    this.carteirinhaService.deleteAnimalVaccine(id);
  }

  deleteAllAnimalVaccine(){
    this.carteirinhaService.deleteAllAnimalVaccine();
  }
}


