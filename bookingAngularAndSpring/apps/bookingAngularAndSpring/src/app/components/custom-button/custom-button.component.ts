import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css'],
})
export class CustomButtonComponent {
  @Input() type: string = '';
  @Input() class: string = '';
  @Input() disable: boolean = false;
  @Input() classNg: string = '';
  @Output() emitter = new EventEmitter();
}
