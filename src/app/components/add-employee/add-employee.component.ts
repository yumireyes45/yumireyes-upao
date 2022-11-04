import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  myForm!:FormGroup;
  color = "accent";

  constructor(
    private fb:FormBuilder,
    private employeeService:EmployeeService,
    private router:Router,
    private snackBar:MatSnackBar
  ) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      name:['',[Validators.required, Validators.maxLength(10)]],
      email:['',[Validators.required, Validators.email]],
      phone:['',[Validators.required]],
    })
  }

  saveEmploye(){
    
    const employee: Employee={
      id:0,
      name:this.myForm.get('name')?.value,
      phone:this.myForm.get('phone')?.value,
      email:this.myForm.get('email')?.value,
    };

    this.employeeService.addEmployee(employee)
        .subscribe({
          next: (data)=>{
            this.snackBar.open("Registro OK",'',{
              duration:3000,
            })
            this.router.navigate(['/employees']);
          },
          error:(err)=>{
            console.log(err);
          }
        })
  }
}
