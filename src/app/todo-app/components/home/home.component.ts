import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isDarkMode: boolean = false;
  userInput: string = '';

  todoList = [
    {
      active: false,
      task: 'Complete online JavaScript course'
    },
    {
      active: true,
      task: 'Jog arround the park 3x'
    },
    {
      active: true,
      task: '10 minutes meditation'
    },
    {
      active: true,
      task: 'Read for 1 hour'
    },
    {
      active: true,
      task: 'Pick up groceries'
    },
    {
      active: true,
      task: 'Complete todo app'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggleDarkMode(){
    this.isDarkMode = !this.isDarkMode;
  }

  addToList(){
    this.userInput = '';
  }
}
