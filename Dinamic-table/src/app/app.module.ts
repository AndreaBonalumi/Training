import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyTableComponent } from './my-table/my-table.component';

import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    MyTableComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
