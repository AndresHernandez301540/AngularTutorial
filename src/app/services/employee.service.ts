import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {"id":0,"name":"Andres","age":21},
      {"id":1,"name":"Ivan","age":22},
      {"id":2,"name":"Hernandez","age":23},
      {"id":3,"name":"Zamora","age":24}
    ];
  }


}
