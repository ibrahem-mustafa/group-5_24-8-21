import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  constructor(private todosSrv: TodosService) { }

  @Input() todoText = '';

  // @Output() todoClicked = new EventEmitter()

  ngOnInit(): void {
  }

  onClick() {
    // this.todoClicked.emit(
    //   this.todoText
    // );
    this.todosSrv.deleteTodo(this.todoText);
  }

}
