import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent implements OnInit {

  index = 0;
  interval: any;
  images: string[] = [
    "../../../assets/images/one.jpg",
    "../../../assets/images/two.jpg",
    "../../../assets/images/three.jpg",
    "../../../assets/images/four.jpg",
    "../../../assets/images/five.jpg"
  ];
  // ------------------------------------------------------------------
  startSlide() {
    this.interval = setInterval(() => {
      this.nextImage();
    }, 1000);
  }
  // -------------------------------------------------------------------
  stopSlide() {
    clearInterval(this.interval);
  }
  // -------------------------------------------------------------------
  nextImage() {
    this.index++;
    if (this.index === this.images.length) {
      this.index = 0;
      this.stopSlide();
    }
  }
  // -------------------------------------------------------------------
  prevImage() {
    this.index = (this.index - 1 + this.images.length) % this.images.length;
  }
  ngOnInit(): void {}

}
