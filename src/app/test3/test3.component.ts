import { Component, OnInit } from '@angular/core';

@Component({
  // Poniendo [] se puede llamar como atributo
  selector: '[app-test3]',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
