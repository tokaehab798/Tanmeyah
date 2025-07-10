import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavDataService {

navLinks = [
    { label: 'About us', href: '#' },
    { label: 'Our Product', href: '#' },
    { label: 'Newsroom', href: '#' },
    { label: 'Sustainability', href: '#' },
    { label: 'Leadership', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact Us', href: '#' }
  ];  
}
