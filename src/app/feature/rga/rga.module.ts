import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RgaRoutingModule } from './rga-routing.module';
import { RgaComponent } from './pages/rga.component';


@NgModule({
  declarations: [
    RgaComponent
  ],
  imports: [
    CommonModule,
    RgaRoutingModule
  ]
})
export class RgaModule { }
