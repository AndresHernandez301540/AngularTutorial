import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
// import { ListComponent } from './list/list.component';
// import { ListDetailComponent } from './list-detail/list-detail.component';
import {EmployeeService} from './services/employee.service';

// Fetch Data using HTTP
import {HttpClientModule} from '@angular/common/http';

// Routing
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { Page404Component } from './page404/page404.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    Test3Component,
    routingComponents,
    Page404Component // Se agrega mejor un arreglo con las rutas que vayamos haciendo
    // ListComponent,
    // ListDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
