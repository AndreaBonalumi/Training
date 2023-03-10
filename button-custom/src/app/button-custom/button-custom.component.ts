import {Component, Input} from '@angular/core';
import {ButtonInterface} from "../buttonInterface";

@Component({
  selector: 'app-button-custom',
  templateUrl: './button-custom.component.html',
  styleUrls: ['./button-custom.component.css']
})
export class ButtonCustomComponent {
  @Input() config !: ButtonInterface;
}
