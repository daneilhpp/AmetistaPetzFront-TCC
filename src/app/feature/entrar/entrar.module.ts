import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EntrarRoutingModule } from './entrar-routing.module';
import { EntrarComponent } from './pages/entrar.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EntrarComponent
  ],
  imports: [
    CommonModule,
    EntrarRoutingModule,
    SharedModule
  ]
})
export class EntrarModule { }
