import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoAppRoutingModule } from './todo-app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    HomeComponent,
    TodoCardComponent
  ],
  imports: [
    CommonModule,
    TodoAppRoutingModule,
    FormsModule,
    DragDropModule
  ]
})
export class TodoAppModule { }
