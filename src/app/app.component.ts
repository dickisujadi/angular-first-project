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

  completeTask() {
    this.isComplete = !this.isComplete;
  }

  updateTitle(newTitle: string) {
    this.title = newTitle;
  }
}
