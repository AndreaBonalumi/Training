import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MyTableConfig} from "../../interfaces/my-table-config";
import {ButtonInterface} from "../../../../../button-custom/src/app/buttonInterface";
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
@Component({
  selector: 'app-my-action',
  templateUrl: './my-action.component.html',
  styleUrls: ['./my-action.component.css']
})
export class MyActionComponent implements OnInit {
  @Input() table !: MyTableConfig;
  @Input() action !: string;
  @Input() dato ?: any;
  @Input() data !: any[];
  @Output() emit : EventEmitter<any> = new EventEmitter<any>()
  editForm !: FormGroup;
  form !: boolean;
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
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.action === 'edit';
    if (this.form)
      this.attivaEdit()
    const controls: Record<string, FormControl> = {};
    this.table.headers.forEach((colonna) => {
      controls[colonna.key] = new FormControl(this.dato[colonna.key], Validators.required)
    });
    this.editForm = this.fb.group(controls)
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
  modificaDati(): void {
    this.data[this.index] = this.editForm.value
    window.alert("dati modificati")
    this.emit.emit()
  }
}
