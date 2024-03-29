import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { Ng2PageTransitionModule } from 'ng2-page-transition';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { PhotographyComponent } from './photography/photography.component';
import { LightboxModule } from 'angular2-lightbox';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhotographyComponent
  ],
  imports: [
    BrowserModule,
    routes,
    BrowserAnimationsModule,
    Ng2PageTransitionModule,
    LightboxModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
