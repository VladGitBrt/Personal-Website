import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'personal-website';
  isLoading: boolean = true;
  constructor(){};

  ngOnInit(): void {
      setTimeout(()=>{
        this.isLoading = false;
      },0)
  }
}
