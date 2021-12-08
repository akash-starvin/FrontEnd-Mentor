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

  ngOnInit(): void {}

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }

  addToList() {
    this.todoList.unshift({
      active: true,
      task: this.userInput,
    });
    this.userInput = '';
  }

  applyFilter(key: string) {
    if (key != this.selectedFilter) {
      this.selectedFilter = key;
    }
  }

  getRemainingTaskCount() {
    return this.todoList.filter((item) => item.active).length;
  }
}
