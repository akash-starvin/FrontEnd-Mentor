import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss'],
})
export class TodoCardComponent implements OnInit {
  @Input() theme: any;
  @Input() data: any;

  constructor() {}

  ngOnInit(): void {}

  completed() {
    this.data.active = !this.data.active;
  }
}
