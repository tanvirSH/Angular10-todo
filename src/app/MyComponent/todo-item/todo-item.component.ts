import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todos } from 'src/app/Todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todos;
  @Input() idx: number = 0;
  @Output() deleteTodo: EventEmitter<Todos> = new EventEmitter();
  @Output() toggleTodo: EventEmitter<Todos> = new EventEmitter();
  status: boolean = false;
  constructor() {
    this.todo = new Todos();
  }

  ngOnInit(): void {
  }

  onClick(todo: Todos){
    console.log('Click');
    this.deleteTodo.emit(todo);
  }

  onMark(todo: Todos){
    this.toggleTodo.emit(todo);
  }

}
