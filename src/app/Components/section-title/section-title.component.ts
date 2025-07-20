import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-section-title',
  imports: [CommonModule],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.css'
})
export class SectionTitleComponent {
   @Input() title: string = '';
  @Input() color: string = 'bg-yellow';
    @Input() titleColor: string = 'text-primary';



}
