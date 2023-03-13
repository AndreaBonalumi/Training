import { Component } from '@angular/core';
import {DatiService} from "./dati.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dati = DatiService.getData()
  headers = DatiService.getTable()
}
