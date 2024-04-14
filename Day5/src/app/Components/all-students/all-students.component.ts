import { Component, OnInit } from '@angular/core';
import { OneStudentComponent } from '../one-student/one-student.component';
import { RouterModule } from '@angular/router';
import { StudentsService } from '../../Services/students.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-all-students',
  standalone: true,
  imports: [OneStudentComponent,RouterModule, HttpClientModule],
  providers:[StudentsService],
  templateUrl: './all-students.component.html',
  styleUrl: './all-students.component.css'
})
export class AllStudentsComponent implements OnInit {
  constructor(private myService:StudentsService){}
  students:any
  ngOnInit(): void {
    this.myService.GetAllStudents().subscribe({
      next:(data)=>{this.students = data},
      error:(error)=>{console.log("Failed To Fetch Data:",error)},
      complete:()=>{console.log("Successeded")}
    })
  }

}
