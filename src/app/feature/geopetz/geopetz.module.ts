import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeopetzRoutingModule } from './geopetz-routing.module';
import { GeopetzComponent } from './pages/geopetz/geopetz.component';
import { VeterinarioComponent } from './pages/veterinario/veterinario.component';
import { GeoPetshopComponent } from './pages/geo-petshop/geo-petshop.component';


@NgModule({
  declarations: [
    GeopetzComponent,
    VeterinarioComponent,
    GeoPetshopComponent
  ],
  imports: [
    CommonModule,
    GeopetzRoutingModule
  ]
})
export class GeopetzModule { }
