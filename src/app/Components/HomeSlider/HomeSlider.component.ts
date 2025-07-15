import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule , TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-HomeSlider',
  imports: [CommonModule,TranslateModule],
  templateUrl: './HomeSlider.component.html',
  styleUrl: './HomeSlider.component.css'
})
export class HomeSliderComponent {
   currentIndex = 0;

  slides = [
    'assets/images/SliderImage1.svg',
    'assets/images/SliderImage2.svg',
    'assets/images/SliderImage3.svg',
  ];

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }


    currentLang: string = '';

  constructor(protected translate: TranslateService) {
    this.currentLang = this.translate.currentLang 
 
  }


}

