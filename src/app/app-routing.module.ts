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
    path: 'selecione',
    loadChildren: () => import('./feature/carteirinha/carteirinha.module').then(m => m.CarteirinhaModule)
  },
  {
    path: 'carteirinha',
    loadChildren: () => import('./feature/carteirinha/carteirinha.module').then(m => m.CarteirinhaModule)
  },
  {
    path: 'adocao',
    loadChildren: () => import('./feature/adocao/adocao.module').then(m => m.AdocaoModule)
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
    path: 'geopetz',
    loadChildren: () => import('./feature/geopetz/geopetz.module').then(m => m.GeopetzModule)
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
