import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,ParamMap} from '@angular/router';
@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  public departmentId;
  constructor(private route:ActivatedRoute,
  private router:Router) { }

  ngOnInit() {
    /* Con el ActivatedRoute podemos obtener la ruta
    a la que se esta ingresando, el snapshot nos ayuda a obtener
    una copia de esta ruta y con el paramMap obtener los identificadores
    o parametros que estan en la ruta, despues hacemos un get para obtener
    el parametro que queramos.
    */
    /*
    El paramMap puede reutilizar la vista cuando se quiere por ejemplo
    hacer un next y previous por lo que no cargaria la informacion nueva
    y quedaria la misma vista aun cuando la direccion haya cambiado, para esto
    se utiliza mejor el paramMap Observable
    */
    //let id= parseInt(this.route.snapshot.paramMap.get('id'))
    //this.departmentId=id;
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id =parseInt(params.get('id'));
      this.departmentId=id;
    });
    /*
    Con esto lo que hacemos es que cada vez que la ruta cambie, se obtendra
    el parametro que se pide (en este caso id) y se podra ver la vista actualizada

    */

  }
  goPrevious(){
    let previousId=this.departmentId-1;
    this.router.navigate(['/list',previousId]);
  }
  goNext(){
    let nextId=this.departmentId+1;
    this.router.navigate(['/list',nextId]);
  }
  // Optional Route Parameters
  goBack(){
    let selectedId=this.departmentId ? this.departmentId : null;
    if(this.departmentId==0){
      selectedId=0;
    }
    //this.router.navigate(['/list',{id:selectedId}])
    this.router.navigate(['../',{id:selectedId}],{relativeTo:this.route})
  }
  seeContact(){
    this.router.navigate(['contact'],{relativeTo:this.route});
  }
}
