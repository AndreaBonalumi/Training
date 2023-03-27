import { Injectable } from '@angular/core';
import {DATA, TABLE} from "../mock-dati";
import { MyTableConfig} from "../interfaces/my-table-config";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DatiService {
  getData(): Observable<any> {
    return of(DATA)
  }
  static getTable(): MyTableConfig {
    return TABLE;
  }
  newData(d: any): Observable<any> {
    DATA.push(d)
    window.alert("dati aggiunti")
    return of(DATA)
  }
  editData(d: any, newd: any): Observable<any> {
    let index = DATA.findIndex(item => {
        return item === d;
    });
    DATA[index] = newd
    window.alert("dati modificati")
    return of(DATA)
  }
  deleteData(d: any): Observable<any> {
    let index = DATA.findIndex(item => {
      return item === d;
    });
    if (index >= 0) {
      DATA.splice(index, 1)
      window.alert("elemento cancellato");
    }
    else
      window.alert("elemento non esistente")
    return of(DATA)
  }
  changeRole(d: any): Observable<any> {
    if (d['role'] == 'admin')
      d['role'] = 'customer'
    else
      d['role'] = 'admin'
    let index = DATA.findIndex(item => {
      return item === d;
    });
    DATA[index] = d
    return of(DATA)
  }
}
