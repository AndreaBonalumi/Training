import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyTableComponent } from './components/my-table/my-table.component';

import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from "@angular/forms";
import { FilterPipe } from './pipe/filter.pipe';
import { OrdinamentoPipe } from './pipe/ordinamento.pipe';
import { PaginationPipe } from './pipe/pagination.pipe';
import { MyButtonComponent } from './components/my-button/my-button.component';
import { MyActionComponent } from './components/my-action/my-action.component';
import { ToolPaginationComponent } from './components/tool-pagination/tool-pagination.component';
@NgModule({
  declarations: [
    AppComponent,
    MyTableComponent,
    FilterPipe,
    OrdinamentoPipe,
    PaginationPipe,
    MyButtonComponent,
    MyActionComponent,
    ToolPaginationComponent,
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
