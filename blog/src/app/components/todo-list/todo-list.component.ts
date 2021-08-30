import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  constructor(private todosSrv: TodosService) {}

  ngOnInit(): void {}

  get todos() {
    return this.todosSrv.todos
  }

  // deleteTodo(todoText: string) {
  //   this.todos.splice(this.todos.indexOf(todoText), 1);
    
  // }
}
