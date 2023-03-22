import {Component, DoCheck, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { MyTableConfig} from "../../interfaces/my-table-config";
import {MyHeaders} from "../../interfaces/my-headers";

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
  pagination: number[] = []
  pagineAttuali: number = 0;
  @Output() emit : EventEmitter<any> = new EventEmitter<any>()
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

  ngOnInit() {
    this.pagineAttuali = Math.ceil(this.data.length / this.tableConfig.pagination.itemPerPage)
    let count = 0
    for (let i = 1; i < this.pagineAttuali + 1; i++) {
      this.pagination[count] = i
      count++
    }
    this.start = 0
    this.end = this.start + this.tableConfig.pagination.itemPerPage
    if (this.tableConfig.order.verso == 'asc') {
      this.iconaOrdinamento = '↓'
    } else {
      this.iconaOrdinamento = '↑'
    }
  }
  ngDoCheck(): void {
    if(this.pagineAttuali != Math.ceil(this.data.length / this.tableConfig.pagination.itemPerPage)) {
      this.pagineAttuali = Math.ceil(this.data.length / this.tableConfig.pagination.itemPerPage)
      let count = 0
      for (let i = 1; i < this.pagineAttuali + 1; i++) {
        this.pagination[count] = i
        count++
      }
    }
    if ((this.end - this.start) != this.tableConfig.pagination.itemPerPage) {
      this.tableConfig.pagination.itemPerPage = parseInt(String(this.tableConfig.pagination.itemPerPage))
      this.end = this.start + this.tableConfig.pagination.itemPerPage
    }
  }
  emitter(azione: string, dato ?: MyHeaders): void {
    const e = { key: azione, dato: dato }
    this.emit.emit(e)
  }
  changePagination(start: number): void {
    this.start = start
    this.end = this.start + this.tableConfig.pagination.itemPerPage
  }
}
