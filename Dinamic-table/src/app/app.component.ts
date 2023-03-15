import { Component } from '@angular/core';
import {DatiService} from "./services/dati.service";
import {MyHeaders} from "./interfaces/my-headers";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dati = DatiService.getData()
  headers = DatiService.getTable()
  edit = false;
  new = false;

  gestisciEvento(e: any): void {
    if(e.key === 'delete')
      this.attivaCancella(e.dato)
    if(e.key === 'new')
      this.attivaNew()
    if(e.key === 'edit')
      this.attivaEdit(e.dato)
  }
  attivaCancella(dato: any): void {
  }
  attivaNew(): void {
    this.new = true
  }
  attivaEdit(dato: any): void {
    this.edit = true
  }

}
