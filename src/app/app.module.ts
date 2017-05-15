import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent } from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {DialogComponent} from './components/Dialog/dialog.component';
import {HomeComponent} from './components/home/home.component';
import {HeroDetailsComponent} from './components/herodetails/herodetails.component';


import {HeroService} from './app.service';
import {routing} from './app.routing';


@NgModule({
  declarations: [
    AppComponent, NavbarComponent, HomeComponent, HeroDetailsComponent, DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    routing
  ],
  entryComponents: [DialogComponent],
  providers: [HeroService],
  bootstrap: [AppComponent ]
})
export class AppModule { }
