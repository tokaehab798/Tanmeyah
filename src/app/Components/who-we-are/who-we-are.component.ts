import { Component } from '@angular/core';
import { SectionTitleComponent } from "../../Components/section-title/section-title.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-who-we-are',
  imports: [SectionTitleComponent,TranslateModule],
  templateUrl: './who-we-are.component.html',
  styleUrl: './who-we-are.component.css'
})
export class WhoWeAreComponent {
  currentLang=''
  constructor(protected translate:TranslateService){
    this.currentLang=this.translate.currentLang

}

}
