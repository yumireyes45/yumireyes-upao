import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { HomeComponent } from './components/home/home.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employees', component: ListEmployeeComponent },
  { path: 'add', component:AddEmployeeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}