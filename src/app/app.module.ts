import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MobileLegendsComponent } from './mobile-legends/mobile-legends.component';
import { FutsalComponent } from './futsal/futsal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MobileLegendsComponent,
    FutsalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
