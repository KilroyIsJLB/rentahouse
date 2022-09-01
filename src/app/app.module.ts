import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HousingListComponent } from './housing-list/housing-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './share/navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AppMaterialModule} from "./app-material.module";
// Imports existants ...
import { LOCALE_ID } from '@angular/core';
import localeFr from '@angular/common/locales/fr';
import {registerLocaleData} from "@angular/common";
registerLocaleData(localeFr);

@NgModule({
  // étiquettes declarations et imports omises ...
  declarations: [
    AppComponent,
    HousingListComponent,
    PageNotFoundComponent,
    NavbarComponent,
    DashboardComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      NoopAnimationsModule,
      AppMaterialModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
