import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todos[];
  localItem: any;
  constructor() {
    this.localItem = localStorage.getItem('todos');
    if(this.localItem){
      this.todos = JSON.parse(this.localItem)
    }else{
      this.todos = [];
    }
   }

  ngOnInit(): void {
  }

  deleteThisTodo(todo: Todos){
    this.todos.splice(this.todos.indexOf(todo),1);
    console.log(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo: Todos){
    this.todos.unshift(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todos){
    let todoIndex = this.todos.indexOf(todo);
    this.todos[todoIndex].active = !todo.active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}
