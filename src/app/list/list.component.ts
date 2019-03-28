import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../services/employee.service';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


public employees=[];
public errorMsg;
public selectedId;
// Se le dice inject cuando se pone en el constructor

  constructor(private employeeService:EmployeeService,
  private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
      this.getEmployees();
      this.route.paramMap.subscribe((params:ParamMap)=>{
        let id =parseInt(params.get('id'));
        this.selectedId=id;
      });
  }

  getEmployees(){
    this.employeeService.getEmployees()
      .subscribe(data => this.employees=data,
                error=>this.errorMsg=error);
  }
  onSelect(e){
    //this.router.navigate(['/list',e.id]);
    //Relative Navigation
    this.router.navigate([e.id],{relativeTo:this.route});
  }
  isSelected(e){
    return e.id===this.selectedId;
  }
}
