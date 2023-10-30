import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-devider',
  templateUrl: './section-devider.component.html',
  styleUrls: ['./section-devider.component.css']
})
export class SectionDeviderComponent {
  @Input() sectionName: string = '';
}
