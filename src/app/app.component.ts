import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Learn Angular';
  isComplete = false;

  fruitList = [
    { name: 'Apple', quantity: 10 },
    { name: 'Banana', quantity: 5 },
    { name: 'Orange', quantity: 15 },
    { name: 'Mango', quantity: 8 },
    { name: 'Grapes', quantity: 12 },
  ];

  completeTask() {
    this.isComplete = !this.isComplete;
  }

  updateTitle(newTitle: string) {
    this.title = newTitle;
  }
}
