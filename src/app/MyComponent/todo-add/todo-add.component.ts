import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todos } from 'src/app/Todos';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  title: string;
  desc: string;
  @Output() addTodo: EventEmitter<Todos> = new EventEmitter();
  constructor() {
    this.title = '';
    this.desc = '';
   }

  ngOnInit(): void {
  }

  onSubmit(){
    const todo = {
      sno: 8,
      title: this.title,
      description: this.desc,
      active: false
    }
    this.addTodo.emit(todo);
  }

}
