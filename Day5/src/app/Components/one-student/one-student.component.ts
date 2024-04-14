import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AllStudentsComponent } from '../all-students/all-students.component';

@Component({
  selector: 'app-one-student',
  standalone: true,
  imports: [RouterModule, AllStudentsComponent],
  templateUrl: './one-student.component.html',
  styleUrl: './one-student.component.css'
})
export class OneStudentComponent {
  @Input() student:any
}
