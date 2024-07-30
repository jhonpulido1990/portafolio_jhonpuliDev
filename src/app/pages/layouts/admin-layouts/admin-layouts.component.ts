import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-admin-layouts',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './admin-layouts.component.html',
  styleUrl: './admin-layouts.component.scss',
})
export class AdminLayoutsComponent {
}
