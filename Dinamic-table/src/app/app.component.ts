import { Component } from '@angular/core';
import {Ordinamento} from "./ordinamento";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ordinamento: Ordinamento = {
    colonna: 'key',
    verso: 'asc'
  }
}
