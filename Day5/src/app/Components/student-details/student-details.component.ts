import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../Services/students.service';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [HttpClientModule, RouterLink, RouterModule],
  providers:[StudentsService],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})

export class StudentDetailsComponent implements OnInit {
  ID:any
  student:any
  constructor(private myService: StudentsService, private myLink: ActivatedRoute, private router: Router){
    this.ID = this.myLink.snapshot.params["id"]
  }

  ngOnInit(): void {
    this.myService.GetStudentById(this.ID).subscribe({
      next:(data)=>{this.student = data},
      error:(error)=>{console.log("Error",error)},
      complete:()=>{console.log("Successeded")}
    })
  }

  Delete(){
    let confirmDelete = confirm("Are You Sure To Delete This Student?")
    if(confirmDelete){
      this.myService.DeleteStudent(this.ID).subscribe({
        error:(error)=>{console.log("Error In Deletion: ",error);
      },
      complete:()=>{
        this.router.navigate(['/'])
      }
    })
  }
    else{
      this.router.navigate(['/students/',this.ID])
    }
}


}
