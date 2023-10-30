import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TextTypingService } from 'src/app/core/services/text-typing.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements AfterViewInit {
  @ViewChild('animateText') text!: ElementRef<HTMLElement>;
  constructor(private textService: TextTypingService){}

  ngAfterViewInit(): void {
    this.textService.animateText(this.text);
}
}
