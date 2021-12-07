import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss'],
})
export class TodoCardComponent implements OnInit {
  @Input() theme: any;

  isComplete: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  completed() {
    console.log('Comp');
    this.isComplete = !this.isComplete;
  }
}
