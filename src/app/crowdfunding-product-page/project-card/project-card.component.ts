import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  isBookmarked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  addToBookmark(){
    this.isBookmarked = !this.isBookmarked;
  }
}
