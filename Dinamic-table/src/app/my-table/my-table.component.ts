import {Component, Input, OnInit} from '@angular/core';
import {MyTableConfig} from "../my-table-config";
@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit{
  @Input() tableConfig !: MyTableConfig;
  @Input() data !: any[];
  iconaOrdinamento !: string;
  datiOrdinati ?: any;
  searchText ?: string;
  searchColumn ?: string;
  ngOnInit() {
    this.tableConfig.order;
    this.datiOrdinati = this.data;
    if (this.tableConfig.order.verso == 'asc') {
      this.iconaOrdinamento = '↑'
    } else {
      this.iconaOrdinamento = '↓'
    }
    this.datiOrdinati = this.ordinamentoDati()
  }

  ordinamento(key: string): void {
    if (this.tableConfig.order.colonna === key) {
      if (this.tableConfig.order.verso === 'asc') {
        this.tableConfig.order.verso ='desc'
        this.iconaOrdinamento = '↓'
      } else {
        this.tableConfig.order.verso = 'asc'
        this.iconaOrdinamento = '↑'
      }
    } else {
      this.tableConfig.order.colonna = key;
      this.tableConfig.order.verso = 'asc';
      this.iconaOrdinamento = '↑'
    }
    this.datiOrdinati = this.ordinamentoDati();
  }
  ordinamentoDati(): any[] {
    return this.data.slice().sort((a, b) => {
      if (a[this.tableConfig.order.colonna] < b[this.tableConfig.order.colonna]) {
        return this.tableConfig.order.verso === 'asc' ? -1 : 1;
      } else if (a[this.tableConfig.order.colonna] > b[this.tableConfig.order.colonna]) {
        return this.tableConfig.order.verso === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
  filtra(): void {}
}
