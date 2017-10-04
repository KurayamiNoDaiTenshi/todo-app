import {Component, OnInit} from '@angular/core';
import Todo from '../model/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Array<Todo> = [];

  constructor() {
  }

  addTaskToList(event) {
    this.todos.unshift(event);
  }

  removeDoneTask(): void {
    this.todos = this.todos.filter((todo) => {
      return !todo.isDone;
    })
  }

  editList(event) {
    if (event === 'deleteAll') {
      this.todos = [];
    }
    else if (event === 'deleteCompleted') {
      this.removeDoneTask();
    }
  }

  ngOnInit() {
  }
}
