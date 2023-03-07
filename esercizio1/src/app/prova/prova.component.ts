import { Component, OnInit, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit, AfterContentInit, AfterContentChecked {

  isDisabled = false;
  disabledShare = true;
  message = "ciao"
  constructor() {
    console.log("costruttore")
  }
  onClick(): void {
    this.disabledShare = false
    this.message = "ti piace"
    window.alert("hai messo mi piace")

  }
  shared(): void {
    this.message = "hai condiviso"
    console.log("hai condiviso il post")
  }
  onInput(e: any): void {
    if(e.target.value.length < 6) {
      this.message = "corto"
    }else {
      if(e.target.value.length < 15) {
        this.message = "medio"
      }else {
        if(e.target.value.length < 25) {
          this.message = "lungo"
        }else {
          this.message = "lunghissimooooo"
        }
      }
    }
  }
  ngOnInit(): void {
    console.log("ngOnInit")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }
}
