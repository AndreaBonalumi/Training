import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import {MyTableConfig} from "../../interfaces/my-table-config";
import {MyHeaders} from "../../interfaces/my-headers";
import {DatiService} from "../../services/dati.service";

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit, AfterContentChecked {
  @Output() emit: EventEmitter<any> = new EventEmitter<any>()
  tableConfig !: MyTableConfig;
  data : any[] = [];
  iconaOrdinamento !: string;
  searchText: string = '';
  searchColumn: string = '';
  start !: number;
  end !: number;
  constructor(private cdr: ChangeDetectorRef, private datiService: DatiService) {}
  ngOnInit() {
    this.getTable()
    this.start = 0
    this.end = this.start + this.tableConfig.pagination.itemPerPage
    if (this.tableConfig.order.verso == 'asc') {
      this.iconaOrdinamento = '↓'
    } else {
      this.iconaOrdinamento = '↑'
    }
  }
  getTable(): void {
    this.datiService.getData().subscribe(dato => this.data = dato)
    this.tableConfig = DatiService.getTable()
  }
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
  changePagination(start: number): void {
    this.start = start
    this.end = this.start + this.tableConfig.pagination.itemPerPage
  }
  ngAfterContentChecked(): void {
    this.cdr.detectChanges()
  }
  emitter(azione: string, dato ?: MyHeaders): void {
    const e = {key: azione, dato: dato}
    this.emit.emit(e)
  }

}
