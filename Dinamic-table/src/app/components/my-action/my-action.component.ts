import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MyTableConfig} from "../../interfaces/my-table-config";
import {ButtonInterface} from "../../../../../button-custom/src/app/buttonInterface";
@Component({
  selector: 'app-my-action',
  templateUrl: './my-action.component.html',
  styleUrls: ['./my-action.component.css']
})
export class MyActionComponent implements OnInit{
  @Input() table !: MyTableConfig;
  @Input() action !: string;
  @Input() dato ?: any;
  @Input() data !: any;
  @Output() emit : EventEmitter<any> = new EventEmitter<any>()

  form !: boolean;
  newData : any = {};
  index : number = -1;
  button_aggiungi : ButtonInterface = {
    text: 'Aggiungi',
    icon: 'cloud-plus',
    class: 'secondary'
  }
  button_modifica : ButtonInterface = {
    text: 'Modifica',
    icon: 'pencil-square',
    class: 'secondary'
  }
  button_back : ButtonInterface = {
    text: 'Back',
    class: 'secondary',
    icon: 'skip-backward'
  }
  ngOnInit(): void {
    this.form = this.action === 'edit';
    if (this.form)
      this.attivaEdit()
    else
      this.attivaNew()
  }
  attivaNew(): void {
    Object.keys(this.table.headers).forEach((colonna) => {
      this.newData[colonna] = '';
    });
  }
  attivaEdit(): void {
    this.index = this.data.findIndex((item: { [x: string]: any; }) => {
      for (const column in item) {
        if (item[column] === this.dato[column]) {
          return true;
        }
      }
      return false;
    })
  }
  aggiungiDato(): void {
    this.data.push(this.newData)
    window.alert("dati aggiunti")
    this.emit.emit()
  }
  modificaDati(): void {
    this.data[this.index] = this.dato
    window.alert("dati modificati")
    this.emit.emit()
  }
}
