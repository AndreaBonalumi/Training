import {Component, Input, OnInit} from '@angular/core';
import {MyTableConfig} from "../my-table-config";
import {Ordinamento} from "../ordinamento";
@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit{
  @Input() tableConfig !: MyTableConfig;
  @Input() data !: any[];
  @Input() ordinamentoDefault !: Ordinamento;
  ordinamentoCorrente ?: Ordinamento;
  iconaOrdinamento : any = {};
  datiOrdinati ?: any;
  ngOnInit() {
    this.ordinamentoCorrente = this.ordinamentoDefault;
    this.datiOrdinati = this.data;
    if (this.iconaOrdinamento[this.ordinamentoCorrente.verso] == 'asc') {
      this.iconaOrdinamento[this.ordinamentoCorrente.colonna] = 'arrow_upward'
    } else {
      this.iconaOrdinamento[this.ordinamentoCorrente.verso] = 'arrow_downward'
    }
  }

  ordinamento(key: string): void {
    if (this.ordinamentoCorrente!.colonna === key) {
      this.ordinamentoCorrente!.verso = this.ordinamentoCorrente!.verso === 'asc' ? 'desc' : 'asc';
    } else {
      this.ordinamentoCorrente!.colonna = key;
      this.ordinamentoCorrente!.verso = 'asc';
    }
    this.datiOrdinati = this.ordinamentoDati();
  }
  ordinamentoDati(): any[] {
    return this.data.slice().sort((a, b) => {
      if (a[this.ordinamentoCorrente!.colonna] < b[this.ordinamentoCorrente!.colonna]) {
        return this.ordinamentoCorrente!.verso === 'asc' ? -1 : 1;
      } else if (a[this.ordinamentoCorrente!.colonna] > b[this.ordinamentoCorrente!.colonna]) {
        return this.ordinamentoCorrente!.verso === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
}
