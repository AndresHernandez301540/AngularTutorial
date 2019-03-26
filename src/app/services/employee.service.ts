import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Employee} from '../models/employee';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError,  } from 'rxjs/operators';


@Injectable({ // Le dice a angular que dependencias necesita para que el servicio funcione
  providedIn: 'root'
})
export class EmployeeService {

  private _url:string = "/assets/data/employees.json";

  constructor(private http:HttpClient) { }

  getEmployees(): Observable <Employee[]>{
    return this.http.get<Employee[]>(this._url).pipe(
                    catchError(this.errorHandler));

  }
  errorHandler(error:HttpErrorResponse){
    return observableThrowError (error.message || "Server Error");
  }

}
