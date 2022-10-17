import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RgaComponent } from './pages/rga.component';

const routes: Routes = [
  { path: '', component: RgaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RgaRoutingModule { }
