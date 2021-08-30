import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor() {}

  todos = ['Todo 1', 'Todo 2', 'Todo 3', 'Todo 4'];


  deleteTodo(todo: string) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
}
