import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentsService } from '../../Services/students.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [FormsModule,HttpClientModule,RouterModule],
  providers:[StudentsService],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  name=""
  email=""
  age=0
  phone=0
  private student:any
  constructor(private myService:StudentsService, private router:Router){
  }
  Add(){
    if(this.name.length>=3 && this.email && this.age>10 && this.phone){
      this.student={name:this.name, email:this.email, age:this.age, phone:this.phone}
      this.myService.AddStudent(this.student).subscribe({
        complete:()=>{
          this.router.navigate(['/'])
        }
      })
    }
  }
}
