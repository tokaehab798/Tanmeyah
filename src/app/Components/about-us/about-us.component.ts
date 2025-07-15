import { Component } from '@angular/core';
import { SectionTitleComponent } from "../section-title/section-title.component";
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-us',
  imports: [SectionTitleComponent, CommonModule,TranslateModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  cards = [
    {
      image: 'assets/images/aboutUS/aboutUs3.svg',
      title: 'Our History'
    },
    {
      image: 'assets/images/aboutUS/aboutUs2.svg',
      title: 'Leadership'
    },
    {
      image: 'assets/images/aboutUS/aboutUs1.svg',
      title: 'Industry Recognition'
    }
  ];
  currentIndex = 0;
  nextCard() {
    // kda na maska awl element f l array b shift w ha7oto f l a5er b push 
    let first = this.cards.shift()
    if (first) this.cards.push(first)
  }

  prevCard() {
    // kda na maska a5er element f l array b pop w ha7oto f l awwal b unshift
    let last = this.cards.pop();
    if (last) this.cards.unshift(last);
  }
  currentLang=''
  constructor(protected translate :TranslateService){
    this.currentLang=this.translate.currentLang

  }

}
