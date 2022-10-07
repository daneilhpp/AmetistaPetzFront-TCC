import { AdocaorComponent } from './components/registrar/adocaor/adocaor.component';
import { VeterinariorComponent } from './components/registrar/veterinarior/veterinarior.component';
import { PetshoprComponent } from './components/registrar/petshopr/petshopr.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './template/footer/footer.component';
import { HeaderComponent } from './template/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { TutorComponent } from './components/registrar/tutor/tutor.component';
import { HttpClientModule } from '@angular/common/http';
import { GeopetzComponent } from './components/geopetz/geopetz.component';
import { PetshopgComponent } from './components/geopetz/petshopg/petshopg.component';
import { VeterinariogComponent } from './components/geopetz/veterinariog/veterinariog.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    RegistrarComponent,
    TutorComponent,
    PetshoprComponent,
    VeterinariorComponent,
    AdocaorComponent,
    GeopetzComponent,
    PetshopgComponent,
    VeterinariogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
