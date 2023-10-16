import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TextTypingService } from 'src/app/core/services/text-typing.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit{
  @ViewChild('animateText') text!: ElementRef<HTMLElement>;
  constructor(private textService: TextTypingService){}
 

  ngAfterViewInit(): void {
      // this.textService.animateText(this.text);
  }
}
