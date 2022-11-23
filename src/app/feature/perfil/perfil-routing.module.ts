import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { PerfilComponent } from "./pages/tutor/perfil.component";
import { VetComponent } from "./pages/vet/vet.component";

const routes: Routes = [
  { path: '', 
  children: [
  { path: '', component: PerfilComponent, },
  { 
    path: 'vet', component: VetComponent, 
  },
  ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
    
})
export class PerfilRoutingModule { }
