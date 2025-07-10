import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeSliderComponent } from "./HomeSlider/HomeSlider.component";
import { SecondryNavbarComponent } from "./secondry-navbar/secondry-navbar.component";
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  imports: [ HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-project';
}
