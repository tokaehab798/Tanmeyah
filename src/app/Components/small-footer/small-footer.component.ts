import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-small-footer',
  imports: [CommonModule],
  templateUrl: './small-footer.component.html',
  styleUrl: './small-footer.component.css'
})
export class SmallFooterComponent {
    currentLang = ''
    constructor(protected translate: TranslateService) {
      this.currentLang = this.translate.currentLang;
    }

}
