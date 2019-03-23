import { Component, OnInit } from '@angular/core';

@Component({
  // Poniendo un punto antes se puede llamar como clase en el html y funciona igual
  selector: '.app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
