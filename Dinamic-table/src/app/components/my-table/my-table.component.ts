import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component, DoCheck,
  EventEmitter, Input,
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
export class MyTableComponent implements OnInit, AfterContentChecked, DoCheck {
  @Output() emit: EventEmitter<any> = new EventEmitter<any>()
  @Input() data !: any[];
  tableConfig : MyTableConfig = DatiService.getTable();
  iconaOrdinamento !: string;
  searchText: string = '';
  searchColumn: string = '';
  start : number = 0;
  end !: number;
  totalItems : number = 0;
  currentPage !: number;
  constructor(private cdr: ChangeDetectorRef, private datiService: DatiService) {}
  ngOnInit() {
    this.currentPage = 1
    this.end = this.start + this.tableConfig.pagination.itemPerPage
    if (this.tableConfig.order.verso == 'asc') {
      this.iconaOrdinamento = '↓'
    } else {
      this.iconaOrdinamento = '↑'
    }
    this.datiService.orderAndPagination(this.tableConfig.order.colonna,
      this.tableConfig.order.verso,
      this.currentPage,
      this.tableConfig.pagination.itemPerPage
    ).subscribe(data => this.data = data)
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
    this.datiService.orderAndPagination(
      this.tableConfig.order.colonna,
      this.tableConfig.order.verso,
      this.currentPage,
      this.tableConfig.pagination.itemPerPage
    ).subscribe(data => this.data = data)
  }
  changePagination(currentPage: number): void {
    this.currentPage = currentPage
    this.end = this.start + this.tableConfig.pagination.itemPerPage
    this.datiService.orderAndPagination(this.tableConfig.order.colonna,
      this.tableConfig.order.verso,
      this.currentPage,
      this.tableConfig.pagination.itemPerPage
    ).subscribe(data => this.data = data)
  }
  ngAfterContentChecked(): void {
    this.cdr.detectChanges()
  }
  emitter(azione: string, dato ?: MyHeaders): void {
    const e = {key: azione, dato: dato}
    this.emit.emit(e)
  }
  filtra() {
    this.datiService.filter(this.searchColumn, this.searchText).subscribe(data => this.data = data)
  }
  ngDoCheck() {
    if(this.totalItems < this.data.length) {
      this.totalItems = this.data.length
    }
  }
}
