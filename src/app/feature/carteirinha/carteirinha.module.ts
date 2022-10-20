import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CarteirinhaRoutingModule } from './carteirinha-routing.module';
import { CarteirinhaComponent } from './pages/carteirinha.component';
import { SelecaoComponent } from './pages/selecao/selecao.component';


@NgModule({
  declarations: [
    CarteirinhaComponent,
    SelecaoComponent
  ],
  imports: [
    CommonModule,
    CarteirinhaRoutingModule,
    FormsModule
  ],
  exports: [
    CarteirinhaComponent,
  ]
})
export class CarteirinhaModule { }
