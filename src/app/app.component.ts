import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  constructor() {
    // setTimeout(() => {
    //   this.title = 'Change blog';
    // }, 2000)
  }
}
