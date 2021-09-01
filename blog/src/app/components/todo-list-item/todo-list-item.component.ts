import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TODO, todoDefaultValue } from 'src/app/interfaces/todo.interface';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css'],
})
export class TodoListItemComponent implements OnInit {
  constructor(private todosSrv: TodosService) {}

  @Input() todo: TODO = todoDefaultValue;

  // @Output() todoClicked = new EventEmitter()

  ngOnInit(): void {}

  onClick() {

    this.todosSrv.deleteTodo(this.todo.id);
    // this.todoClicked.emit(
    //   this.todoText
    // );
    // this.todosSrv.deleteTodo(this.todoText);
  }
}
