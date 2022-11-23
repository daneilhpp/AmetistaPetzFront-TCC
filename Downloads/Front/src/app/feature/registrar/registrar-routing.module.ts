import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdocaoComponent } from '../adocao/pages/adocao.component';
import { PetshopComponent } from './pages/petshop/petshop.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { TutorComponent } from './pages/tutor/tutor.component';
import { VeterinarioComponent } from './pages/veterinario/veterinario.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: RegistrarComponent, },
      {
        path: 'adocao',
        component: AdocaoComponent
      },
      {
        path: 'petshop',
        component: PetshopComponent
      },
      {
        path: 'tutor',
        component: TutorComponent
      },
      {
        path: 'veterinario',
        component: VeterinarioComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrarRoutingModule { }
