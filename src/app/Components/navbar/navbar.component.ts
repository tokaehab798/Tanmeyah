import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SecondryNavbarComponent } from "../secondry-navbar/secondry-navbar.component";
import { NavDataService } from '../../services/nav-data.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
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
}
