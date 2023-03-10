import { Injectable } from '@angular/core';
import {DATA, TABLE} from "./mock-dati";
import {MyTableConfig} from "./my-table-config";
import {Ordinamento} from "./ordinamento";

@Injectable({
  providedIn: 'root'
})
export class DatiService {
  getData(): any[] {
    return DATA;
  }
  getTable(): MyTableConfig {
    return TABLE;
  }
  orderColumn(key: string, ordinamento: Ordinamento, dati: any[]): any[] {
  if (ordinamento.colonna == key) {
    ordinamento.verso = (ordinamento.verso == 'asc') ? 'desc' : 'asc'
  } else {
    ordinamento.colonna = key
    ordinamento.verso = 'asc'
  }
  }
}
