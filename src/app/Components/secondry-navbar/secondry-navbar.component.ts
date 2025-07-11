import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavDataService } from '../../services/nav-data.service';

@Component({
  selector: 'app-secondry-navbar',
  imports: [CommonModule],
  templateUrl: './secondry-navbar.component.html',
  styleUrl: './secondry-navbar.component.css'
})
export class SecondryNavbarComponent {
navlinks=inject(NavDataService).navLinks;

}
