import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './template/footer/footer.component';
import { HeaderComponent } from './template/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { TutorComponent } from './components/registrar/tutor/tutor.component';
import { AdocaoComponent } from './components/registrar/adocao/adocao.component';
import { VeterinarioComponent } from './components/registrar/veterinario/veterinario.component';
import { PetshopComponent } from './components/registrar/petshop/petshop.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    RegistrarComponent,
    TutorComponent,
    AdocaoComponent,
    VeterinarioComponent,
    PetshopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
