import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fruit-card',
  templateUrl: './fruit-card.component.html',
  styleUrls: ['./fruit-card.component.scss']
})
export class FruitCardComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {}

}
