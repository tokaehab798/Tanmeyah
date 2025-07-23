import { Component } from '@angular/core';
import { HomeSliderComponent } from "../HomeSlider/HomeSlider.component";
import { WhoWeAreComponent } from "../who-we-are/who-we-are.component";
import { AboutUsComponent } from "../about-us/about-us.component";
import { OurProductsComponent } from "../our-products/our-products.component";
import { SuccessStoriesComponent } from "../success-stories/success-stories.component";
import { SmallFooterComponent } from "../small-footer/small-footer.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [HomeSliderComponent, WhoWeAreComponent, AboutUsComponent, OurProductsComponent, SuccessStoriesComponent, SmallFooterComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
