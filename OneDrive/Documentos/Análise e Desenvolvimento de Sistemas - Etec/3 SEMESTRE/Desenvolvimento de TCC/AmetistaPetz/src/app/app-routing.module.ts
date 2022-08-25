import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdocaoComponent } from './components/adocao/adocao.component';
import { CarteirinhaComponent } from './components/carteirinha/carteirinha.component';
import { DenunciaComponent } from './components/denuncia/denuncia.component';
import { GeopetzComponent } from './components/geopetz/geopetz.component';
import { HomeComponent } from './components/home/home.component';
import { RgaComponent } from './components/rga/rga.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'carteirinha',component:CarteirinhaComponent},
  {path:'adocao',component:AdocaoComponent},
  {path:'denuncia',component:DenunciaComponent},
  {path:'geopetz',component:GeopetzComponent},
  {path:'rga',component:RgaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
