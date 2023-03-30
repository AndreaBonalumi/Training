import {
  AfterContentChecked,
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
export class MyActionComponent implements OnInit, AfterContentChecked {
  @Input() action !: string;
  @Input() dato ?: any;
  @Output() emit : EventEmitter<any> = new EventEmitter<any>();
  table : MyTableConfig = DatiService.getTable();
  editForm !: FormGroup;
  isEdit : boolean = false;
  isNew : boolean = false;
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
    if(this.route.snapshot.paramMap.get('id')) {
      this.datiService.getDato(String(this.route.snapshot.paramMap.get('id'))).subscribe(data => this.dato = data)
    }
  }
  ngAfterContentChecked() {
    if((this.action === 'Cambia ruolo' || this.action === 'delete') && this.dato != undefined){
      this.setUpForm()
    }
    if(this.action === 'new') {
      this.isNew = true;
    }
    if(this.action === 'edit' && this.dato != undefined && this.editForm == undefined) {
      this.setUpForm()
    }
  }
  aggiungiDato(newForm: NgForm): void {
    this.datiService.newData(newForm.value).subscribe(() => this.goBack())
    //this.emit.emit()
    window.alert("elemento aggiunto")
  }
  modificaDati(): void {
    if(this.action === 'edit') {
      this.datiService.editData(this.dato.id, this.editForm.value).subscribe(() => this.goBack())
      window.alert("elemento modificato")
    }
    if(this.action === 'Cambia ruolo') {
      this.datiService.changeRole(this.dato).subscribe(() => this.goBack())
      window.alert("ruolo moificato")
    }
    if(this.action === 'delete') {
      this.datiService.deleteData(this.dato).subscribe(() => this.goBack())
      window.alert('elemento cancellato')
    }
  }
  goBack() {
    this.location.back()
  }
  setUpForm() {
    const controls: Record<string, FormControl> = {};
    this.table.headers.forEach((colonna) => {
      controls[colonna.key] = new FormControl(this.dato[colonna.key], Validators.required)
    });
    this.editForm = this.fb.group(controls)
    this.isEdit = true
  }
}
