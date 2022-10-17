import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrarRoutingModule } from './entrar-routing.module';
import { EntrarComponent } from './pages/entrar.component';


@NgModule({
  declarations: [
    EntrarComponent
  ],
  imports: [
    CommonModule,
    EntrarRoutingModule
  ]
})
export class EntrarModule { }
