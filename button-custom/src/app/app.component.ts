import { Component } from '@angular/core';
import {ButtonInterface} from "./buttonInterface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  button1 : ButtonInterface = {
    icon: 'bricks',
    class: 'primary',
    text: 'bottone'

  }
  button2 : ButtonInterface = {
    icon: 'arrow-right',
    class: 'secondary',
    text: 'ciao'

  }
  button3 : ButtonInterface = {
    icon: 'heart',
    class: 'primary',
    text: 'pippo'

  }
}
