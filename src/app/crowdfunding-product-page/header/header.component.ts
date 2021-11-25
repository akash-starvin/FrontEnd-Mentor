import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMenu: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
