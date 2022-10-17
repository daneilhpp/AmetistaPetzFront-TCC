import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdocaoComponent } from './pages/adocao.component';

const routes: Routes = [
  {
    path: '',
    component: AdocaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdocaoRoutingModule { }
