import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './pages/tutor/perfil.component';
import { PerfilRoutingModule } from './perfil-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { VetComponent } from './pages/vet/vet.component';



@NgModule({
  declarations: [
    PerfilComponent,
    VetComponent,
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    SharedModule
  ]
})
export class PerfilModule { }
