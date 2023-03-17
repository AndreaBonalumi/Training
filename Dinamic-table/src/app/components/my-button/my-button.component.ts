import { Component, Input } from '@angular/core';
import {ButtonInterface} from "../../../../../button-custom/src/app/buttonInterface";

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent {
  @Input() config !: ButtonInterface;
}
