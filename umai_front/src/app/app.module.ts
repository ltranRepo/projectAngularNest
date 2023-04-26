import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ProfilComponent } from './profil/profil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AccesComponent } from './acces/acces.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ReservationComponent,
    ProfilComponent,
    ConnexionComponent,
    AccueilComponent,
    AccesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }