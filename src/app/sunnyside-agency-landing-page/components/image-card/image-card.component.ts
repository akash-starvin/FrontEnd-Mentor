import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {

  @Input() imageUrlData: any;

  constructor() { }

  ngOnInit(): void {}

}
