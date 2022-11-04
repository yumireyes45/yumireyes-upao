import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListEmployeeComponent,
    HomeComponent,
    AddEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
