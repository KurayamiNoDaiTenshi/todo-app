import {Component, OnInit, Input} from '@angular/core';
import Todo from '../model/Todo';
import _ from 'lodash';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todoItem: Todo;
  constructor() {
  }

  ngOnInit() {
    this.todoItem.idTodo = _.replace(this.todoItem.title, ' ', '_');
  }

}
