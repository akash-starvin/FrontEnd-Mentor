import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss']
})
export class MediaCardComponent implements OnInit {

  @Input() data: any;
  @Input() theme: any;

  constructor() { }

  ngOnInit(): void {}

}
