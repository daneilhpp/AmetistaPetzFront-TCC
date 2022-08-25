import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './template/footer/footer.component';
import { HeaderComponent } from './template/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CarteirinhaComponent } from './components/carteirinha/carteirinha.component';
import { RgaComponent } from './components/rga/rga.component';
import { GeopetzComponent } from './components/geopetz/geopetz.component';
import { AdocaoComponent } from './components/adocao/adocao.component';
import { DenunciaComponent } from './components/denuncia/denuncia.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    CarteirinhaComponent,
    RgaComponent,
    GeopetzComponent,
    AdocaoComponent,
    DenunciaComponent
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
