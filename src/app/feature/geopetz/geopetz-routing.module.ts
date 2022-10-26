import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeoPetshopComponent } from './pages/geo-petshop/geo-petshop.component';
import { GeopetzComponent } from './pages/geopetz/geopetz.component';
import { VeterinarioComponent } from './pages/veterinario/veterinario.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: GeopetzComponent },
      { path: 'veterinario', component: VeterinarioComponent },
      { path: 'petshop', component: GeoPetshopComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeopetzRoutingModule { }
