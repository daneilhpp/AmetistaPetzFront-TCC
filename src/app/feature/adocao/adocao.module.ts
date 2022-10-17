import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdocaoRoutingModule } from './adocao-routing.module';
import { AdocaoComponent } from './pages/adocao.component';


@NgModule({
  declarations: [
    AdocaoComponent
  ],
  imports: [
    CommonModule,
    AdocaoRoutingModule
  ]
})
export class AdocaoModule { }
