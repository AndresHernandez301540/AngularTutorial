import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  //templateUrl: './test.component.html',
  // template:'<div> Inline Template </div>', // Se puede hacer un render asi de una linea
  template:`
  <div>
      Hi {{name}}
  </div>
  <h2>{{2+2}}</h2>
  <h3>{{"Welcome " + name}}</h3>
  <h4>{{name.length}}</h4>
  <h5>{{greetUser()}}</h5>
  <h6>{{siteUrl}}</h6>
  <input [id]="myId" type="text" value="Andres">
  <input [disabled]=disabled id={{myId}} type="text" value="Andres">
  <input [disabled]=!disabled id={{myId}} type="text" value="Andres">
  <input bind-disabled=disabled id={{myId}} type="text" value="Andres">
  <h6 [class]="styleclass"> Prueba </h6>
  <h6 [class.text-danger]="hasError"> Prueba </h6>
  <h6 [ngClass]="messageClasses"> Prueba </h6>
  <h2 [style.color]="'orange'"> Esto es Style Binding</h2>
  <h3 [style.color]="hasError ? 'red' : 'green'"> Conditional Style Binding</h3>
  <h4 [style.color]="highlightColor"> Esto es Style Binding con variable</h4>
  <h4 [ngStyle]="titleStyles"> Esto es Style Binding con objecto</h4> <br>
  <button (click)="onClick($event)"> Saludo </button> {{greeting}}
  <button (click)="greeting='Andres'"> Saludo </button> {{greeting}}   `, // Para escribir multiples lineas se usa el ``
  //styleUrls: ['./test.component.css']
  // Tambien se puede escribir el css de esta manera
  styles:[`
    div{
      color:black;
    }
    .text-success{
      color:green;
    }
    .text-danger{
      color:red;
    }


    `]
})
export class TestComponent implements OnInit {
  // A esto {{name}} Se llama interpolación
  // Las asignaciones no son posibles en {{a=2}} esto no se puede hacer
  public name='Andres';
  public siteUrl=window.location.href; // En la interpolacion no se pueden mandar a llamar variables globales de JS
  // Property Binding
  public myId="Test Id";
  public disabled=true;
  // Class Binding
  public styleclass="text-success";
  // Cuando se hace class binding no se puede poner class y [class] ya que class no funcionaria
  public hasError=false;
  // Se puede hacer un objecto para saber cual clase es true y aplicarlo
  public messageClasses={
    "text-success":!this.hasError,
    "text-danger": this.hasError
  }
  // Style binding
  public highlightColor='orange'
  public titleStyles={
    color:"blue",
    fontStyle:"italic"
  }
  // Event binding
  public greeting='';


  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello "+this.name;
  }
  onClick(event){
    console.log(event);
    this.greeting='Welcome';
  }

}
