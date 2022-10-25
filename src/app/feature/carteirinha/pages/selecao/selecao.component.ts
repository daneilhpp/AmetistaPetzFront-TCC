import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CardVaccine, CarteirinhaService, VaccineAnimalType, vaccineCardMock } from '../../services/carteirinha.service';

declare var window: any;

@Component({
  selector: 'app-selecao',
  templateUrl: './selecao.component.html',
  styleUrls: ['./selecao.component.css']
})
export class SelecaoComponent implements OnInit {
  formAddCard: any;

  constructor(private carteirinhaService: CarteirinhaService) { }

  ngOnInit(): void {
    this.formAddCard = new window.bootstrap.Modal(
      document.getElementById("addCard")
    );
  }
  
  openAddCardModal() {
    this.formAddCard.show();
  }
  closeAddCardModal() {
    //this.deleteAnimalVaccine(this.animals$.id);
    this.formAddCard.hide();
  }

  
  
  /* getMockFromCarteirinha(): Observable<VaccineAnimalType[]>{
    return this.carteirinhaService.getMock();
  } */

  public cards$ = CardVaccine;

}
