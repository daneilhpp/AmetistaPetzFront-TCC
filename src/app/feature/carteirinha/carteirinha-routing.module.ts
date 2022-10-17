import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteirinhaComponent } from './pages/carteirinha.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CarteirinhaComponent },
      { path: ':id', component: CarteirinhaComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarteirinhaRoutingModule { }
