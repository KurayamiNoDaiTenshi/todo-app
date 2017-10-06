import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import {TodoService} from "./services/TodoService";
import TodoApi from "./services/TodoApi";
@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodoService,TodoApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
