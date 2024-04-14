import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AllStudentsComponent } from './Components/all-students/all-students.component';
import { HeaderComponent } from './Components/header/header.component';
import { OneStudentComponent } from './Components/one-student/one-student.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    AllStudentsComponent,
    HeaderComponent,
    OneStudentComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Day5';
}
