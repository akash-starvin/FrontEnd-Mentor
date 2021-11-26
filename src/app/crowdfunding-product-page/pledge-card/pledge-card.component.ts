import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pledge-card',
  templateUrl: './pledge-card.component.html',
  styleUrls: ['./pledge-card.component.scss']
})
export class PledgeCardComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {}

}
