import { Component, OnInit } from '@angular/core';

@Component({
  // Poniendo un punto antes se puede llamar como clase en el html y funciona igual
  selector: '.app-test2',
  template:`
  <div>
    <div>
      <h2> Template Reference Variables </h2>
      {{name}}<br>
      <input #myInput type="text">
      <button (click)="logMessage(myInput.value)"> Log </button>
      <input #myInput2 type="text">
      <button (click)="logMessage(myInput2)"> Log </button>
      <br>
      <br>
    <div>
      <div>
        <h2> Two way Binding </h2>
          <input [(ngModel)]="name2" type="text">
          {{name2}}
      </div>
      <div>
        <h2> ngIf </h2>
          <h3 *ngIf="display"> Se cumple la condicion </h3>
          <h3 *ngIf="!display"> No se cumple la condicion </h3>

          <h3 *ngIf="!display; else elseBlock">
            Verdadero
          </h3>
          <ng-template #elseBlock>
            <h3>
              Else
            </h3>
          </ng-template>

          <h2> ngIf por secciones </h2>
          <div *ngIf="!display; then thenBlock; else elseBlock">

          </div>
          <ng-template #thenBlock>
            <h3>
              Verdadero
            </h3>
          </ng-template>

          <ng-template #elseBlock>
            <h3>
              Falso
            </h3>
          </ng-template>
      </div>
      <div>
        <h2> ngSwitch </h2>
          <div [ngSwitch]="color">
            <div *ngSwitchCase="'red'"> Elegiste el rojo </div>
            <div *ngSwitchCase="'blue'"> Elegiste el azul </div>
            <div *ngSwitchCase="'green'"> Elegiste el verde </div>
            <div *ngSwitchDefault> Elige de nuevo </div>
          </div>
      </div>
      <div>
        <h2> ngFor </h2>
          <div *ngFor="let c of colors; index as i">
            {{i}},{{c}}
          </div>
      </div>
  </div>
  `,

  styles:[`



    `]
})
export class Test2Component implements OnInit {
  // Template Reference variables
  // Se usa el # en el input para darle nombre a la variable
  // Se puede pasar el nombre de la variable para referenciar a un elemento de HTML
  public name='Test 2';

  // Two way Binding
  // Siempre se pone [()] Cuando se vaya a usar ngModel [(ngModel)]
  // Para que el ngModel funcione se tiene que importar el FormsModule al archivo appModule.ts
  public name2='';
  // Structural Directives (ngIf, ngSwitch, ngFor)
    // ngIf - Hace render si se cumple una condición
      // Siempre se tiene que poner *ngIf con el asterisco
      // Cuando se pone false el elemento de remueve del DOM

      // Para escribir un pedazo de codigo condicional se puede utilizar la etiqueta <ng-template>
      // En el *ngIf podemos agregar en la condicion que variable o bloque buscar con un else
      // Para eso se necesita tener un bloque de render con la variable que se va a utilizar en el else
      public display=true;
    //ngSwitch - Cuando tengamos que comparar por varios valores
      // Se utiliza con [], seria [ngSwitch]="nombre de la variable"
      //Para cada caso utilizamos *ngSwitchCase
      //En caso de que no se cumpla la condicion se usa *ngSwitchDefault
      public color="red";
    //ngFor
      // Para obtener el index del arreglo a imprimir, despues de la asignacion de Variables
      // Se pone index as i
      // Tambien se puede utilizar el last as l para tener un boolean y saber cual elemento es el ultimo del arreglo
      // odd as o, even as e 
      public colors=["red","blue","green","yellow"];

  constructor() { }

  ngOnInit() {
  }

  logMessage(value){
    console.log(value);
  }


}
