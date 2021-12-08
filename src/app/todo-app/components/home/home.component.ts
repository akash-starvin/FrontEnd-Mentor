import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isDarkMode: boolean = false;
  userInput: string = '';
  selectedFilter: string = 'all';
  displayTodoList: any = [];

  todoList = [
    {
      active: false,
      task: 'Complete online JavaScript course',
    },
    {
      active: true,
      task: 'Jog arround the park 3x',
    },
    {
      active: true,
      task: '10 minutes meditation',
    },
    {
      active: true,
      task: 'Read for 1 hour',
    },
    {
      active: true,
      task: 'Pick up groceries',
    },
    {
      active: true,
      task: 'Complete todo app',
    },
  ];

  filterArray = [
    {
      key: 'all',
      displayName: 'All',
    },
    {
      key: 'active',
      displayName: 'Active',
    },
    {
      key: 'completed',
      displayName: 'Completed',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.getFilteredArray(this.selectedFilter);
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }

  addToList() {
    if (this.userInput) {
      this.todoList.unshift({
        active: true,
        task: this.userInput,
      });
      this.userInput = '';
    }
    this.getFilteredArray(this.selectedFilter);
  }

  applyFilter(key: string) {
    if (key != this.selectedFilter) {
      this.selectedFilter = key;
      this.getFilteredArray(key);
    }
  }

  getFilteredArray(key: string) {
    this.displayTodoList = [];
    switch (key) {
      case 'active':
        this.displayTodoList.push(
          ...this.todoList.filter((item) => item.active)
        );
        break;
      case 'completed':
        this.displayTodoList.push(
          ...this.todoList.filter((item) => !item.active)
        );
        break;
      default:
        this.displayTodoList.push(...this.todoList);
    }
  }

  getRemainingTaskCount() {
    return this.todoList.filter((item) => item.active).length;
  }

  deleteTask($event: number) {
    this.todoList = this.todoList.filter(
      (item) => item !== this.displayTodoList[$event]
    );
    this.getFilteredArray(this.selectedFilter);
  }

  markTaskCompleted($event: number) {
    this.displayTodoList[$event].active = !this.displayTodoList[$event].active;
    this.getFilteredArray(this.selectedFilter);
  }

  clearCompletedTask() {
    this.todoList = this.todoList.filter((item) => item.active);
    this.getFilteredArray(this.selectedFilter);
  }
}
