import {Component, DoCheck, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MyTableConfig} from "../../interfaces/my-table-config";
import {MyHeaders} from "../../interfaces/my-headers";
import {ButtonInterface} from "../../../../../button-custom/src/app/buttonInterface";
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
  next(): void {
    this.start += this.tableConfig.pagination.itemPerPage
    this.end += this.tableConfig.pagination.itemPerPage
  }
  back(): void {
    this.start -= this.tableConfig.pagination.itemPerPage
    this.end -= this.tableConfig.pagination.itemPerPage
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
    if ((this.end - this.start) != this.tableConfig.pagination.itemPerPage) {
      this.tableConfig.pagination.itemPerPage = parseInt(String(this.tableConfig.pagination.itemPerPage))
      this.end = this.start + this.tableConfig.pagination.itemPerPage
    }
  }
  emitter(azione: string, dato ?: MyHeaders): void {
    const e = { key: azione, dato: dato }
    this.emit.emit(e)
  }
  generaBottone(azione: string): any {
    let button: ButtonInterface = {
      icon: 'map',
      text: azione,
      class: 'primary'
    }
    if(azione === 'new')
      button.icon = 'postcard'
    if(azione === 'edit') {
      button.icon = 'pencil'
      button.class = 'secondary'
    }
    if (azione === 'delete') {
      button.icon = 'trash3'
      button.class = 'secondary'
    }
    return button
  }
}
