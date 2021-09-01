import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  constructor(private todosSrv: TodosService) { }

  ngOnInit(): void {
  }

  todoTitle: string = '';

  addTodo() {
    this.todosSrv.createTodo(this.todoTitle);
    this.todoTitle = ''
  }

}
