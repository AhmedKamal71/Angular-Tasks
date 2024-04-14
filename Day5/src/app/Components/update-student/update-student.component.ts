import { Component } from '@angular/core';
import { StudentsService } from '../../Services/students.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-student',
  standalone: true,
  imports: [HttpClientModule, RouterModule, RouterLink, FormsModule],
  providers:[StudentsService],
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.css'
})
export class UpdateStudentComponent {
  private student: any;
  ID: any;
  name: any;
  email: any;
  age: any;
  phone: any;

  constructor(private myService: StudentsService, private myLink: ActivatedRoute, private router: Router) {
    this.ID = this.myLink.snapshot.params['id'];
    this.GetStudentData(); 
  }

  GetStudentData() {
    this.myService.GetStudentById(this.ID).subscribe({
      next: (data) => {
        this.student = data;
        this.name = this.student.name;
        this.email = this.student.email;
        this.age = this.student.age;
        this.phone = this.student.phone;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  Update() {
    if (this.name && this.name.length >= 3 && this.age && this.age > 10 && this.email && this.phone) {
      this.student = { name: this.name, email: this.email, age: this.age, phone: this.phone };
      this.myService.UpdateStudent(this.ID, this.student).subscribe({
        complete: () => {
          this.router.navigate(['/students/', this.ID]);
        }
      });
    }
  }
}

