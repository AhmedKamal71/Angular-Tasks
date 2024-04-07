import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name = ""
  age = ""
  @Output() myEvent = new EventEmitter
  Send(){
    if(this.name.length>3 && +this.age >= 10){

      let Students = {Name:this.name, Age:this.age}
      this.myEvent.emit(Students)
    }
  }
}
