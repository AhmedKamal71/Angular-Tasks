import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { StudentsComponent } from './Components/students/students.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegisterComponent, StudentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Day3';
  dataParent: any[] = [];

  getData(event: any): void {
    this.dataParent.push(event);
    console.log(this.dataParent);
  }
}

