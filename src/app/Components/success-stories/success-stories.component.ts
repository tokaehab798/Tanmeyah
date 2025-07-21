import { Component } from '@angular/core';
import { SectionTitleComponent } from "../section-title/section-title.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-success-stories',
  imports: [SectionTitleComponent, TranslateModule, CommonModule],
  templateUrl: './success-stories.component.html',
  styleUrl: './success-stories.component.css'
})
export class SuccessStoriesComponent {

SuccessStories = [
  {
    paragraph:
      "At Tanmeyah, we’re not just looking to help small business grow; we’re in the business of giving back to communities, fueling individual success, and changing lives. Our financing programs have allowed men and women to turn dreams into businesses realities, and we are proud to have helped thousands achieve social mobility by giving them the means to start a new life. Meet some of the inspiring men and women who have turned their lives into success stories.15 years of helping a unique class of entrepreneurs and their businesses",
 
    Images: [
        {
        name: "yasser",
        image: "assets/images/story1.svg"
      },
      {
        name: "Mohamed & Hassan",
        image: "assets/images/story_2.svg"
      },
      {
        name: "samiha & Hend ",
        image: "assets/images/story_3.svg"
      }
    ]
  },
  {
    paragraph:
      "Every loan we provide is an opportunity for someone to build a brighter future. From bakery owners to tailors and tech repair entrepreneurs, our clients prove that ambition, when paired with support, can lead to incredible achievements. These stories are a tribute to their resilience and growth.",
  
    Images: [
        {
        name: "Omar & safa",
        image: "assets/images/story1.svg"
      },
      {
        name: "Hana",
        image: "assets/images/story_2.svg"
      },
      {
        name: "Mahmoud & Nabil",
        image: "assets/images/story_3.svg"
      }
    ]
  },
  {
    paragraph:
      "Over the past 15 years, Tanmeyah has supported thousands in unlocking their full potential. Our clients are not just business owners—they are role models in their communities. These stories celebrate their journey from struggle to success and the hope they now inspire in others.",
 
    Images: [
        {
        name: "Omar & Samira",
        image: "assets/images/story1.svg"
      },
      {
        name: "Hana & ahmed",
        image: "assets/images/story_2.svg"
      },
      {
        name: "Mahmoud & samir",
        image: "assets/images/story_3.svg"
      }
    ]
  }
];


  currentLang = ''
  constructor(protected translate: TranslateService) {
    this.currentLang = this.translate.currentLang;
  }
  currentIndex = 0;


nextStory() {
  if (this.currentIndex < this.SuccessStories.length - 1) {
    this.currentIndex++;
  } else {
    this.currentIndex = 0;
  }
}

prevStory() {
  if (this.currentIndex > 0) {
    this.currentIndex--;
  } else {
    this.currentIndex = this.SuccessStories.length - 1; 
  }
}

}
