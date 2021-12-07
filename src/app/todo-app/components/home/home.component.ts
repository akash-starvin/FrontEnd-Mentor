import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isDarkMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDarkMode(){
    this.isDarkMode = !this.isDarkMode;
  }
}
