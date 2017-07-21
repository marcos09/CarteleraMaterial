import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from'@angular/material';

import { AppComponent } from './app.component';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
import {MdCardModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdMenuModule} from '@angular/material';
import {MdSidenavModule} from '@angular/material';
import {MdAutocompleteModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';

    BrowserAnimationsModule,
    MdButtonModule, 
    MdCheckboxModule,
    MdMenuModule,
    MdSidenavModule,
    MdAutocompleteModule,
    MdInputModule,
    MdIconModule,
    MdToolbarModule


*/