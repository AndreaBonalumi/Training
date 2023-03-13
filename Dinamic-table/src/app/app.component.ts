import { Component } from '@angular/core';
import {Ordinamento} from "./ordinamento";
import {DatiService} from "./dati.service";
import {MyTableConfig} from "./my-table-config";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dati = DatiService.getData()
  headers = DatiService.getTable()

  ordinamentoDefault: Ordinamento = {
    colonna: this.headers.headers[0].key,
    verso: 'asc'
  }
}
