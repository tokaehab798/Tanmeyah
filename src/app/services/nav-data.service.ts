import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavDataService {

navLinks = [
    { label: 'HOME', href: '#Home' },
    { label: 'ABOUT-US', href: '#' },
    { label: 'OUR-PRODUCT', href: '#' },
    { label: 'NEWSROOM', href: '#' },
    { label: 'SUSTAINABILITY', href: '#' },
    { label: 'LEADERSHIP', href: '#' },
    { label: 'CAREERS', href: '#' },
    { label: 'CONTACT US', href: '#' }
  ];  
}
