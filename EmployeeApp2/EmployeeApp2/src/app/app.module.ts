import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { CreateemployeeComponent } from './createemployee/createemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    UpdateemployeeComponent,
    CreateemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
