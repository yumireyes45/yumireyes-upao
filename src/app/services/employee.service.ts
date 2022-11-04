import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  basePath: string = environment.basePath;

  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get<Employee[]>(this.basePath);
  }

  addEmployee(employee: Employee){
    return this.http.post<Employee>(this.basePath, employee);
  }

  updateEmployee(id:any,employee: Employee){
    return this.http.put<Employee>(`${this.basePath}/${id}`, employee);
  }

  deleteEmployee(id:any){
    return this.http.delete<Employee>(`${this.basePath}/${id}`)
  }
}