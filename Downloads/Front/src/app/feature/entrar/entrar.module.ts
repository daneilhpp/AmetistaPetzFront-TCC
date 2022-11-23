import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EntrarRoutingModule } from './entrar-routing.module';
import { EntrarComponent } from './pages/entrar.component';


@NgModule({
  declarations: [
    EntrarComponent
  ],
  imports: [
    CommonModule,
    EntrarRoutingModule,
    FormsModule
  ]
})
export class EntrarModule { }
