import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {}

}
