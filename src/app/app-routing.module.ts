import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./feature/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./feature/entrar/entrar.module').then((m) => m.EntrarModule)
  },
  {
    path: 'carteirinha',
    loadChildren: () => import('./feature/carteirinha/carteirinha.module').then(m => m.CarteirinhaModule)
  },
  {
    path: 'rga',
    loadChildren: () => import('./feature/rga/rga.module').then(m => m.RgaModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./feature/registrar/registrar.module').then(m => m.RegistrarModule)
  },
  {
    path: 'denuncia',
    loadChildren: () => import('./feature/denuncia/denuncia.module').then(m => m.DenunciaModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./feature/perfil/perfil.module').then(m => m.PerfilModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
