import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  visualizza = false;
  buttonConfig = {
    icon : 'arrow-right',
    text : 'bottone',
    customClass: 'primary',
  }
  onSubmit(): void {
    this.visualizza = true;
  }
}
