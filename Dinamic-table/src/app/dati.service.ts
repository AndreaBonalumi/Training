import { Injectable } from '@angular/core';
import {DATA, TABLE} from "./mock-dati";
import {MyTableConfig} from "./my-table-config";
import {Ordinamento} from "./ordinamento";

@Injectable({
  providedIn: 'root'
})
export class DatiService {
  static getData(): any[] {
    return DATA;
  }
  static getTable(): MyTableConfig {
    return TABLE;
  }
}
