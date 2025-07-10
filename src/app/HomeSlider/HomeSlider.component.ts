import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-HomeSlider',
  imports: [ CommonModule],
  templateUrl: './HomeSlider.component.html',
  styleUrl: './HomeSlider.component.css'
})
export class HomeSliderComponent {
   currentIndex = 0;

  slides = [
    'assets/Header.jpg',
    'assets/Header2.jpg',
    'assets/Header3.jpg',
  ];

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}

