import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { StudentdetailsComponent } from './Components/studentdetails/studentdetails.component';
import { StudentsComponent } from './Components/students/students.component';
import { ErrorComponent } from './Components/error/error.component';
import { HeaderComponent } from './Components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    StudentdetailsComponent,
    StudentsComponent,
    ErrorComponent,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Day4';
}
