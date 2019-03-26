import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../services/employee.service';
@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {
public employees=[];
public errorMsg;
  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }
  getEmployees(){
    this.employeeService.getEmployees()
      .subscribe(data => this.employees=data,
                error=>this.errorMsg=error);
  }
}
