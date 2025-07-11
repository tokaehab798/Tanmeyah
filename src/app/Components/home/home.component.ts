import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { SecondryNavbarComponent } from "../secondry-navbar/secondry-navbar.component";
import { HomeSliderComponent } from "../HomeSlider/HomeSlider.component";
import { WhoWeAreComponent } from "../who-we-are/who-we-are.component";
import { AboutUsComponent } from "../about-us/about-us.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, SecondryNavbarComponent, HomeSliderComponent, WhoWeAreComponent, AboutUsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
