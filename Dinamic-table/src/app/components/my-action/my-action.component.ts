import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MyTableConfig} from "../../interfaces/my-table-config";
import {ButtonInterface} from "../../../../../button-custom/src/app/buttonInterface";
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-my-action',
  templateUrl: './my-action.component.html',
  styleUrls: ['./my-action.component.css']
})
export class MyActionComponent implements OnInit{
  @Input() table !: MyTableConfig;
  @Input() action !: string;
  @Input() dato ?: any;
  @Input() data !: any[];
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
  }
  attivaEdit(): void {
    this.index = this.data.findIndex(item => {
      for (const column in this.dato) {
        if (item[column] === this.dato[column]) {
          return true;
        }
      }
      return false;
    });
  }
  aggiungiDato(newForm: NgForm): void {
    console.log(newForm)
    this.data.push(newForm.value)
    window.alert("dati aggiunti")
    this.emit.emit()
  }
  modificaDati(editForm: NgForm): void {
    this.data[this.index] = this.dato
    window.alert("dati modificati")
    this.emit.emit()
  }
}
