import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { ButtonCustomComponent } from './button-custom/button-custom.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonCustomComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
      NgbModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
