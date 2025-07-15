import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavDataService } from '../../services/nav-data.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-secondry-navbar',
  imports: [CommonModule, TranslateModule],
  templateUrl: './secondry-navbar.component.html',
  styleUrl: './secondry-navbar.component.css'
})
export class SecondryNavbarComponent {
  navlinks = inject(NavDataService).navLinks;
  constructor(public translate: TranslateService) { }

  toggleLang() {
    const newLang = this.translate.currentLang === 'en' ? 'ar' : 'en';
    this.translate.use(newLang);
    localStorage.setItem('appLang', newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang === 'ar' ? 'ar' : 'en';

  }
}
