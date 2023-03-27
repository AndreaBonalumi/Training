import { Injectable } from '@angular/core';
import {DATA, TABLE} from "../mock-dati";
import { MyTableConfig} from "../interfaces/my-table-config";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DatiService {
  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    return of(DATA)
  }
  static getTable(): MyTableConfig {
    return TABLE;
  }
  newData(d: any) {
    DATA.push(d)
    window.alert("dati aggiunti")
  }
  editData(d: any, newd: any) {
    let index = DATA.findIndex(item => {
        return item === d;
    });
    DATA[index] = newd
    window.alert("dati modificati")
  }
  deleteData(d: any) {
    let index = DATA.findIndex(item => {
      return item === d;
    });
    if (index >= 0) {
      DATA.splice(index, 1)
      window.alert("elemento cancellato");
    }
    else
      window.alert("elemento non esistente")
  }
  changeRole(d: any) {
    if (d['role'] == 'admin')
      d['role'] = 'customer'
    else
      d['role'] = 'admin'
    let index = DATA.findIndex(item => {
      return item === d;
    });
    DATA[index] = d
  }
}
