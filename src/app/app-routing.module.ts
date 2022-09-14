import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteirinhaComponent } from './components/carteirinha/carteirinha.component';
import { RgaComponent } from './components/rga/rga.component';
import { AdocaoComponent } from './components/adocao/adocao.component';
import { DenunciaComponent } from './components/denuncia/denuncia.component';
import { HomeComponent } from './components/home/home.component';
import { EntrarComponent } from './components/entrar/entrar.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { TutorComponent } from './components/registrar/tutor/tutor.component';
import { PetshopComponent } from './components/registrar/petshop/petshop.component';
import { VeterinarioComponent } from './components/registrar/veterinario/veterinario.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'adocao',component:AdocaoComponent},
  {path:'carteirinha',component:CarteirinhaComponent},
  {path:'denuncia',component:DenunciaComponent},
  {path:'rga',component:RgaComponent},
  {path:'login',component:EntrarComponent},
  {path:'registrar',component:RegistrarComponent},
  {path:'registrar/tutor',component:TutorComponent},
  {path:'registrar/adocao',component:AdocaoComponent},
  {path:'registrar/petshop',component:PetshopComponent},
  {path:'registrar/veterinario',component:VeterinarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
