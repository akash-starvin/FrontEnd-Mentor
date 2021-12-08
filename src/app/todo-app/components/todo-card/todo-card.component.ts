import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss'],
})
export class TodoCardComponent implements OnInit {
  @Input() theme: any;
  @Input() data: any;
  @Input() position: any;

  @Output() deletePosition = new EventEmitter<number>();
  @Output() completedPosition = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  markTaskCompleted() {
    this.completedPosition.emit(this.position);
  }

  deleteTask() {
    this.deletePosition.emit(this.position);
  }
}
