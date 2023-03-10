import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent{
  @Input() icon !: string;
  @Input() text !: string;
  @Input() customClass ?: string;
  constructor() {
  }
}
