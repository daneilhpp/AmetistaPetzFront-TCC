import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CardVaccine, CarteirinhaService, VaccineAnimalType, vaccineCardMock } from '../../services/carteirinha.service';

@Component({
  selector: 'app-selecao',
  templateUrl: './selecao.component.html',
  styleUrls: ['./selecao.component.css']
})
export class SelecaoComponent implements OnInit {

  constructor(private carteirinhaService: CarteirinhaService) { }

  ngOnInit(): void {
  }

  /* getMockFromCarteirinha(): Observable<VaccineAnimalType[]>{
    return this.carteirinhaService.getMock();
  } */

  public cards$ = CardVaccine;

}
