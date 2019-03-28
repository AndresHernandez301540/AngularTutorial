import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
// Se crea un arreglo con las rutas que se van a utilizar en el proyecto

//Routing
import {ListComponent} from './list/list.component';
import {ListDetailComponent} from './list-detail/list-detail.component';

//Page not Found
// El ** funciona como wildcard
// El path ** siempre debe de ser el ultimo en los path
// El '' es el home del proyecto
import {Page404Component} from './page404/page404.component';


//Route Parameters
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';

//Child routes
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';

const routes:Routes=[
  // {path :'',component:ListDetailComponent},
  // {path:'',redirectTo:'/details',pathMatch:'prefix'},
  {path:'',redirectTo:'/details',pathMatch:'full'},
  {path:'list',component:ListComponent},
  {path:'list/:id',
  component:EmployeedetailsComponent,
  children:[
    {path:'contact',component:EmployeeContactComponent}
  ]},
  {path:'details',component:ListDetailComponent},
  {path:'**',component:Page404Component}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  ListComponent,
  ListDetailComponent,
  Page404Component,
  EmployeedetailsComponent];
