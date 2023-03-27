import { Injectable } from '@angular/core';
import {TABLE} from "../mock-dati";
import { MyTableConfig} from "../interfaces/my-table-config";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DatiService {
  private apiUrl = 'http://localhost:3000/data'
  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  static getTable(): MyTableConfig {
    return TABLE;
  }
  newData(d: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, d);
  }
  editData(d: any): Observable<any> {
    const url = `${this.apiUrl}/${d.id}`;
    return this.http.put<any>(url, d);
  }
  deleteData(d: any): Observable<any> {
    const url = `${this.apiUrl}/${d.id}`;
    return this.http.delete<any>(url);
  }
  changeRole(d: any) {
    if (d['role'] == 'admin')
      d['role'] = 'customer'
    else
      d['role'] = 'admin'
    this.editData(d)
  }
}
