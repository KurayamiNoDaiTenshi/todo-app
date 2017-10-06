import {Injectable} from "@angular/core";
import Todo from '../model/Todo';
import TodoApi from '../services/TodoApi';
@Injectable()
export class TodoService {
  todos:Array<Todo> = [];
  constructor(private todoApi: TodoApi) {
  }

  getTodos():Promise<Array<Todo>> {
    return new Promise(resolve=>{
      this.todoApi.getTodos().then((todos)=>{
        this.todos = todos;
        resolve(this.todos)
      });
    });
  }

  addTodo(todo: Todo): Promise<Array<Todo>> {
    return new Promise(resolve=>{
      this.todoApi.addTodo(todo).then(newTodo=>{
        this.todos.push(newTodo);
        resolve(this.todos)
      })
    })
  }

  /*updateTodo(todo: Todo): Promise<Array<Todo>> {
    return this.todoApi.updateTodo(todo);
  }

  deleteTodos(): Promise<Array<Todo>> {
    return this.todoApi.deleteAllTodos();
  }

  clearComplete(): Promise<Array<Todo>> {
    return this.todoApi.deleteCompletedTodos();
  }*/
}
