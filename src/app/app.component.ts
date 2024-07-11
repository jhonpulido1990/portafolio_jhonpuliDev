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
  darkMode = false;

  toggleTheme() {
    this.darkMode = !this.darkMode;
    const theme = this.darkMode ? 'dark-theme' : 'light-theme';
    document.body.className = theme;
  }
}
