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
      "Tanmeyah has become a catalyst for change in underserved communities, empowering people with the tools they need to succeed. Through our financing solutions, individuals have launched small enterprises, created jobs, and supported their families. These stories reflect our mission to drive sustainable impact, one life at a time.",
    personLeft: [
      {
        name: "Yasser ",
        image: "assets/images/story1.svg"
      }
    ],
    peopleRight: [
      {
        name: "Mohamed & Hossam",
        image: "assets/images/story_2.svg"
      },
      {
        name: "Hend & Sameha",
        image: "assets/images/story_3.svg"
      }
    ]
  },
  {
    paragraph:
      "Every loan we provide is an opportunity for someone to build a brighter future. From bakery owners to tailors and tech repair entrepreneurs, our clients prove that ambition, when paired with support, can lead to incredible achievements. These stories are a tribute to their resilience and growth.",
    personLeft: [
      {
        name: "Khaled & Rania",
        image: "assets/images/story7.svg"
      }
    ],
    peopleRight: [
      {
        name: "Mostafa",
        image: "assets/images/story8.svg"
      },
      {
        name: "Layla & Yasmin",
        image: "assets/images/story9.svg"
      }
    ]
  },
  {
    paragraph:
      "Over the past 15 years, Tanmeyah has supported thousands in unlocking their full potential. Our clients are not just business owners—they are role models in their communities. These stories celebrate their journey from struggle to success and the hope they now inspire in others.",
    personLeft: [
      {
        name: "Omar & Salma",
        image: "assets/images/story10.svg"
      }
    ],
    peopleRight: [
      {
        name: "Hana",
        image: "assets/images/story11.svg"
      },
      {
        name: "Mahmoud & Nabil",
        image: "assets/images/story12.svg"
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
    let first = this.SuccessStories.shift()
    if (first) this.SuccessStories.push(first)
}

prevStory() {
  let last = this.SuccessStories.pop();
    if (last) this.SuccessStories.unshift(last);
}


}
