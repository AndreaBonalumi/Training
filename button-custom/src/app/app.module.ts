import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MyButtonComponent } from './my-button/my-button.component';
import {FormsModule} from "@angular/forms";
import { ButtonCustomComponent } from './button-custom/button-custom.component';

@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent,
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
