import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DenunciaRoutingModule } from './denuncia-routing.module';
import { DenunciaComponent } from './pages/denuncia/denuncia.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DenunciaComponent
  ],
  imports: [
    CommonModule,
    DenunciaRoutingModule,
    SharedModule
  ]
})
export class DenunciaModule { }
