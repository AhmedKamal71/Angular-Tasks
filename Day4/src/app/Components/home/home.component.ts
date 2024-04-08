import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  form = new FormGroup({
    Name: new FormControl("Name",[Validators.required, Validators.minLength(3)]),
    Age: new FormControl("20",[Validators.required, Validators.min(20), Validators.max(40)])
  })

  GetData(){
    console.log(this.form);
    
  }

}
