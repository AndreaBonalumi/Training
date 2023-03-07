import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'esercizio1';
  nome = "";
  isVisible = true
  onClick(e: any): void {
    this.title = 'primary'
  }
  onInput(e: any): void {
    this.nome = e.target.value
  }
}
