import {Component} from '@angular/core';
import {DatiService} from "./services/dati.service";
import {ButtonInterface} from "../../../button-custom/src/app/buttonInterface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  dati = DatiService.getData()
  headers = DatiService.getTable()
  edit : boolean
  new : boolean;
  dato ?: any;
  index : number = -1;
  nuovoDato: any = {};
  constructor() {
    this.new = false;
    this.edit = false;
  }
  gestisciEvento(e: any): void {
    if(e.key === 'delete')
      this.attivaCancella(e.dato)
    if(e.key === 'new') {
      this.attivaNew()
    }
    if(e.key === 'edit') {
      this.dato = e.dato
      this.attivaEdit(e.dato)
    }
  }
  attivaCancella(dato: any): void {
    this.index = this.dati.findIndex(riga => {
      for (const column in riga) {
        if (riga[column] === dato[column]) {
          return true;
        }
      }
      return false;
    })
    if (this.index >= 0) {
      this.dati.splice(this.index, 1);
      window.alert("elemento cancellato");
    }
    else
      window.alert("elemento non esistente")
  }
  attivaNew(): void {
    Object.keys(this.headers.headers).forEach((colonna) => {
      this.nuovoDato[colonna] = '';
    });
    this.new = true
  }
  attivaEdit(dato: any): void {
    this.edit = true;
    this.index = this.dati.findIndex(riga => {
      for (const column in riga) {
        if (riga[column] === dato[column]) {
          return true;
        }
      }
      return false;
    })
  }
  modificaDati(): void {
    this.dati[this.index] = this.dato
    window.alert("dati modificati")
    this.edit = false
  }
  aggiungiDato(): void {
    this.dati.push(this.nuovoDato)
    window.alert("dati aggiunti")
    this.new = false
  }
  generaBottone(azione: string): ButtonInterface {
    return {
      icon: 'pencil',
      text: azione,
      class: 'secondary'
    }
  }
}
