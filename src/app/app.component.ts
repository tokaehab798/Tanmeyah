import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { HomeSliderComponent } from "./Components/HomeSlider/HomeSlider.component";
import { SecondryNavbarComponent } from "./Components/secondry-navbar/secondry-navbar.component";
import { HomeComponent } from "./Components/home/home.component";


@Component({
  selector: 'app-root',
  imports: [HomeComponent, SecondryNavbarComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-project';
}
