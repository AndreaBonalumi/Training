import {Component, OnInit} from '@angular/core';
import {DatiService} from "./services/dati.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  dati : any[] = []
  dato ?: any;
  apriMyAction : boolean = false;
  action : string = 'noAction';
  constructor(private datiservice: DatiService) {}
  ngOnInit() {
    this.getDati()
  }
  getDati(): void {
    this.datiservice.getData().subscribe(dato => this.dati = dato)
  }
  gestisciEvento(e: any): void {
    if(e.key === 'delete')
      this.attivaCancella(e.dato)
    if(e.key === 'new') {
      this.apriMyAction = true
      this.action = 'new'
    }
    if(e.key === 'edit') {
      this.apriMyAction = true
      this.dato = e.dato
      this.action = 'edit'
    }
    if(e.key === 'Cambia ruolo') {
      this.dato = e.dato
      this.cambiaRuolo()
    }
  }
  attivaCancella(dato: any): void {
    this.datiservice.deleteData(dato)
  }
  cambiaRuolo(): void {
    this.datiservice.changeRole(this.dato)
  }
}
