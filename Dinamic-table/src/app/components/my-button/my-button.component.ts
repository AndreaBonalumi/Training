import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ButtonInterface} from "../../../../../button-custom/src/app/buttonInterface";

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit{
  @Input() config !: ButtonInterface;
  @Input() typeButton ?: string;
  @Input() isDisabled ?: boolean;
  @Output() emitter : EventEmitter<any> = new EventEmitter<any>()
  type !: string;
  disabled !: boolean;
  ngOnInit() {
    if(this.typeButton !== undefined)
      this.type = ''
    else
      this.type = this.typeButton!
    if(this.isDisabled !== undefined)
      this.disabled = this.isDisabled;
    else
      this.disabled = false;
  }
}
