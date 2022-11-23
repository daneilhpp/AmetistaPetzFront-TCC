import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrarRoutingModule } from './registrar-routing.module';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdocaoComponent } from './pages/adocao/adocao.component';
import { PetshopComponent } from './pages/petshop/petshop.component';
import { TutorComponent } from './pages/tutor/tutor.component';
import { VeterinarioComponent } from './pages/veterinario/veterinario.component';


@NgModule({
  declarations: [
    RegistrarComponent,
    AdocaoComponent,
    PetshopComponent,
    TutorComponent,
    VeterinarioComponent
  ],
  imports: [
    CommonModule,
    RegistrarRoutingModule,
    SharedModule
  ]
})
export class RegistrarModule { }
