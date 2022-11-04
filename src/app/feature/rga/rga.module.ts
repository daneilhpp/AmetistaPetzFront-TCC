import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RgaRoutingModule } from './rga-routing.module';
import { RgaComponent } from './pages/rga.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RgaComponent
  ],
  imports: [
    CommonModule,
    RgaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RgaModule { }
