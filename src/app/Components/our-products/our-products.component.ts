import { Component, inject, AfterViewChecked } from '@angular/core';
import { SectionTitleComponent } from "../section-title/section-title.component";
import { CommonModule } from '@angular/common';
import { OurproductService } from '../../services/ourproduct.service';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-our-products',
  standalone: true,
  imports: [SectionTitleComponent, CommonModule, TranslateModule],
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.css']
})
export class OurProductsComponent implements AfterViewChecked {
  cards = inject(OurproductService).cards;

  private swiperInitialized = false;

  ngAfterViewChecked(): void {
    if (!this.swiperInitialized && this.cards.length > 0) {
      new Swiper('.swiper', {
        slidesPerGroup: 1,
        loop: true,
        centeredSlides: false,
        keyboard: { enabled: true },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        speed: 900,
        spaceBetween: 8,
        breakpoints: {
          320: { slidesPerView: 1.9 },   
          425: { slidesPerView: 2.2 },  
          640: { slidesPerView: 2.7 },   
          768: { slidesPerView: 3.1 },  
          1024: { slidesPerView: 3.7 },    
          1366: { slidesPerView: 4.5 },  
          1440: { slidesPerView: 5 },    
          1920: { slidesPerView: 5.5 },
          2000:{slidesPerView:8}   
        }
      });
      this.swiperInitialized = true; 
    }
  }

  currentLang = ''
  constructor(protected translate : TranslateService){
    this.currentLang=this.translate.currentLang
  }
}
