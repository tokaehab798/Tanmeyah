import { Component } from '@angular/core';
import { HomeSliderComponent } from "../HomeSlider/HomeSlider.component";
import { WhoWeAreComponent } from "../who-we-are/who-we-are.component";
import { AboutUsComponent } from "../about-us/about-us.component";
import { OurProductsComponent } from "../our-products/our-products.component";

@Component({
  selector: 'app-home',
  imports: [ HomeSliderComponent, WhoWeAreComponent, AboutUsComponent, OurProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
