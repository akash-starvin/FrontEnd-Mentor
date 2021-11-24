import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'feedback-card',
  templateUrl: './feedback-card.component.html',
  styleUrls: ['./feedback-card.component.scss']
})
export class FeedbackCardComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {}

}
