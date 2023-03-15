import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {MyTableConfig} from "../interfaces/my-table-config";
@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit, DoCheck {
  @Input() tableConfig !: MyTableConfig;
  @Input() data !: any[];
  iconaOrdinamento !: string;
  searchText: string = '';
  searchColumn: string = '';
  start !: number;
  end !: number;
  ordinamento(key: string): void {
    if (this.tableConfig.order.colonna === key) {
      if (this.tableConfig.order.verso === 'asc') {
        this.tableConfig.order.verso = 'desc'
        this.iconaOrdinamento = '↑'
      } else {
        this.tableConfig.order.verso = 'asc'
        this.iconaOrdinamento = '↓'
      }
    } else {
      this.tableConfig.order.colonna = key;
      this.tableConfig.order.verso = 'asc';
      this.iconaOrdinamento = '↓';
    }
  }
  next(): void {
    this.tableConfig.pagination.itemPerPage = parseInt(String(this.tableConfig.pagination.itemPerPage))
    if (this.end < this.data.length - this.tableConfig.pagination.itemPerPage) {
      this.start += this.tableConfig.pagination.itemPerPage
      this.end = this.start + this.tableConfig.pagination.itemPerPage
    }
  }
  back(): void {
    this.tableConfig.pagination.itemPerPage = parseInt(String(this.tableConfig.pagination.itemPerPage))
    if (this.start >= this.tableConfig.pagination.itemPerPage) {
      this.start -= this.tableConfig.pagination.itemPerPage
      this.end = this.start + this.tableConfig.pagination.itemPerPage
    }
  }
  ngOnInit() {
    this.start = 0
    this.end = this.start + this.tableConfig.pagination.itemPerPage
    if (this.tableConfig.order.verso == 'asc') {
      this.iconaOrdinamento = '↓'
    } else {
      this.iconaOrdinamento = '↑'
    }
  }
  ngDoCheck(): void {
    this.end = this.start + this.tableConfig.pagination.itemPerPage
  }
}
