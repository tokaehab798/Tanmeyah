import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavDataService } from '../../services/nav-data.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    currentLang: string;
    menuPosition: 'left' | 'right' = 'right';


socialIcons = [
  { icon: 'facebook-f' },
  { icon: 'linkedin-in' },
  { icon: 'instagram' },
  { icon: 'youtube' }
];



navlinks= inject(NavDataService).navLinks
  
isOpen = false;

toggleMenu() {
  this.isOpen = true;
}

closeMenu() {
  this.isOpen = false;
}
constructor(public translate: TranslateService) {
  const savedLang = localStorage.getItem('appLang') || 'en';
    this.currentLang = savedLang;
  this.translate.use(savedLang);
  document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
}

 toggleLang() {
  this.currentLang = this.currentLang === 'en' ? 'ar' : 'en'; 
  this.translate.use(this.currentLang);
  localStorage.setItem('appLang', this.currentLang);
  document.documentElement.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang=this.currentLang === 'ar' ? 'ar' : 'en'
  this.menuPosition = this.currentLang === 'ar' ? 'left' : 'right';
  this.closeMenu()
}




}
