import Todo from '../model/Todo';
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/toPromise';

const API_SRV_URL = 'http://api-todo.angelo-b.net';
const API_SRV_PORT = 3000;
const API_SRV_ROOT = 'todos';
const URL = `${API_SRV_URL}:${API_SRV_PORT}/${API_SRV_ROOT}`;
@Injectable()
export default class TodoApi {
  constructor(private http:HttpClient){}
  getTodos(): Promise<Array<Todo>> {
    return this.http.get(`${URL}`).toPromise();
  }
  addTodo(todo:Todo):Promise<Todo>{
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.post(`${URL}`,todo,{headers}).toPromise();
  }
  /*updateTodo(todo:Todo):Promise<any>{
    return new Promise((resolve,reject)=>{

    })
  }
  deleteTodos():Promise<Todo>{
    return new Promise(resolve=>{

    }
  }
  /*deleteCompletedTodos():Promise<any>{
    return new Promise((resolve,reject)=>{
      this.todos = this.todos.filter((todo)=>{
        return !todo.isDone;
      });
      this.getTodos().then((todos)=>{resolve(todos)});
      reject((e)=>{console.log(e.message)});
});
}*/
}
