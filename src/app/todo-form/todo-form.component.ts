import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import _ from 'lodash';
import Todo from '../model/Todo';
import {TodoService} from "../services/TodoService";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  constructor(private todoService:TodoService) {}
  @Output()
  newTask: EventEmitter<Todo> = new EventEmitter<Todo>();

  addTask(task) {
    const taskname: string = task.value;
    if (!_.isEmpty(taskname.trim())) {
      task.value = '';
      this.todoService.addTodo(new Todo(taskname));
      /*this.newTask.emit(new Todo(taskname, false, _.replace(taskname, ' ', '_')))*/
    }
  }
  keyEvent(task,event){
    if(event.keyCode === 13){
      this.addTask(task);
    }
  }
  @Output()
  editLst:EventEmitter<string> = new EventEmitter();
  removeAllTask(){
    this.editLst.emit('deleteAll');
  }
  removeCompleteTask(){
    this.editLst.emit('deleteCompleted');
  }

  ngOnInit() {
  }

}
