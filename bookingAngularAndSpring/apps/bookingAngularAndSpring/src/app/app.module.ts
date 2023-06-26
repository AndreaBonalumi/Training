import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';

import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { TableCustomComponent } from './components/table-custom/table-custom.component';
import { ToolPaginationComponent } from './components/tool-pagination/tool-pagination.component';
import { MyButtonComponent } from './components/my-button/my-button.component';

import { FilterPipe } from './pipes/filter.pipe';
import { OrdinamentoPipe } from './pipes/ordinamento.pipe';
import { PaginationPipe } from './pipes/pagination.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomButtonComponent,
    FilterPipe,
    OrdinamentoPipe,
    PaginationPipe,
    TableCustomComponent,
    ToolPaginationComponent,
    MyButtonComponent,
  ],
  imports: [BrowserModule, RouterOutlet, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
