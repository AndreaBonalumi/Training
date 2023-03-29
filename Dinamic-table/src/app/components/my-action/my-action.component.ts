import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {MyTableConfig} from "../../interfaces/my-table-config";
import {ButtonInterface} from "../../../../../button-custom/src/app/buttonInterface";
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {DatiService} from "../../services/dati.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-my-action',
  templateUrl: './my-action.component.html',
  styleUrls: ['./my-action.component.css']
})
export class MyActionComponent implements OnInit {
  @Input() action !: string;
  @Input() dato ?: any;
  @Output() emit : EventEmitter<any> = new EventEmitter<any>();
  table : MyTableConfig = DatiService.getTable();
  editForm !: FormGroup;
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
  constructor(private fb: FormBuilder,
              private datiService: DatiService,
              private route: ActivatedRoute,
              private location: Location) {}
  ngOnInit(): void {
    this.action = this.route.snapshot.paramMap.get('action')!
    const controls: Record<string, FormControl> = {};
    if(this.action === 'edit'){
      this.table.headers.forEach((colonna) => {
        controls[colonna.key] = new FormControl(this.dato[colonna.key], Validators.required)
      });
      this.editForm = this.fb.group(controls)
    }
  }
  aggiungiDato(newForm: NgForm): void {
    this.datiService.newData(newForm.value).subscribe()
    this.emit.emit()
    window.alert("elemento aggiunto")
  }
  modificaDati(): void {
    this.datiService.editData(this.dato.id, this.editForm.value).subscribe()
    this.emit.emit()
    window.alert("elemento modificato")
  }
}
