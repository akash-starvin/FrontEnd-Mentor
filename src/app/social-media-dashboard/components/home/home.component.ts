import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  darkMode: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  changeStatus() {
    this.darkMode = ! this.darkMode;
  }
}
