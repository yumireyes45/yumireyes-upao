import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css'],
})
export class ListEmployeeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'actions'];
  dataSource = new MatTableDataSource<Employee>();

  @ViewChild(MatPaginator) paginator!:MatPaginator;

  constructor(private employeeService: EmployeeService,
    private snackBar:MatSnackBar) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe((data: Employee[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    });
  }


  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe(()=>{
      this.dataSource.data=this.dataSource.data.filter((e:Employee)=>{
        this.snackBar.open("Empleado eliminado",'',{
          duration:3000,
        })
        return e.id!=id?e:false
      })
    })
  }
}
