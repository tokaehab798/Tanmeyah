import { Component } from '@angular/core';
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { SecondryNavbarComponent } from "./Components/secondry-navbar/secondry-navbar.component";
import { HomeComponent } from "./Components/home/home.component";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, SecondryNavbarComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-project';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'ar']);
    const savedLang = localStorage.getItem('appLang') || 'en';
    this.translate.setDefaultLang(savedLang);
    this.translate.use(savedLang);
    document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = savedLang === 'ar' ? 'ar' : 'en'
  }
}
