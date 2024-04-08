import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-studentdetails',
  standalone: true,
  imports: [],
  templateUrl: './studentdetails.component.html',
  styleUrl: './studentdetails.component.css'
})
export class StudentdetailsComponent {
  id=0
  constructor(myRoute: ActivatedRoute){
    // console.log(myRoute);
    this.id = myRoute.snapshot.params["id"]
  }
}
