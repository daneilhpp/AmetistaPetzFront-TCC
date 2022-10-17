import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CarteirinhaRoutingModule } from './carteirinha-routing.module';
import { CarteirinhaComponent } from './pages/carteirinha.component';


@NgModule({
  declarations: [
    CarteirinhaComponent
  ],
  imports: [
    CommonModule,
    CarteirinhaRoutingModule
  ],
  exports: [
    CarteirinhaComponent,
  ]
})
export class CarteirinhaModule { }
