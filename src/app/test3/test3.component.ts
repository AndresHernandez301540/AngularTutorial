import { Component, OnInit } from '@angular/core';
import {Input,Output} from '@angular/core'; // Se agrega el input y output para la comunicacion entre componentes
import {EventEmitter} from '@angular/core'; // Para que el hijo le mande informacion al padre se necesitan los eventos

@Component({
  // Poniendo [] se puede llamar como atributo
  // selector: '[app-test3]',
  selector:'app-test3',
  template: `
  <h1> Test 3 - Component Interaction </h1>
  <h2> {{"Hello "+ name}}</h2>
  <button (click)="fireEvent()"> Send event </button>

  <h1> Pipes </h1>
  <h2> {{name}} </h2>
  <h2> {{ name | lowercase}}</h2>
  <h2> {{ name | uppercase}}</h2>
  <h2> {{ message | titlecase}}</h2>
  <h2> {{ name | slice:3:5}}</h2>
  <h3> JSON Pipe </h3>
  <h2> {{person | json }} </h2>

  <h2> {{5.678 | number:'1.2-3'}}</h2>
  <h2> {{5.678 | number:'3.4-5'}}</h2>
  <h2> {{5.678 | number:'3.1-2'}}</h2>

  <h2> {{ 0.25 | percent }} </h2>


  <h2> {{ 0.25 | currency }} </h2>
  <h2> {{ 0.25 | currency:'MX' }} </h2>

  <h2> {{date}}</h2>
  <h2> {{date | date:'short'}}</h2>
  <h2> {{date | date:'shortDate'}}</h2>
  <h2> {{date | date:'shortTime'}}</h2>
  `,
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {

  //Component Interaction
  // Recibe la propiedad del padre para eso es el @Input()
  @Input('parentData') public name; // Se puede usar un alias para referirnos aqui asi al parentData
  @Output() public childEvent =new EventEmitter(); // Se agrega el output para que el hijo pueda mandar informacion al padre

  // Pipes - Solo cambian los valores en la vista, no cambia los valores en las clases
  // | Pipe operator
  public message ="welcome andres";
  public person = {
    "firstName":"Andres",
    "lastName":"Hernandez"
  }
  public date= new Date();


  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit('Hey Ivan');
  }

}
