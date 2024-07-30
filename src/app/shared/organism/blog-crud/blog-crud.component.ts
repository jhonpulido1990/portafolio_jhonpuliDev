import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-crud',
  standalone: true,
  imports: [],
  templateUrl: './blog-crud.component.html',
  styleUrl: './blog-crud.component.scss',
})
export class BlogCrudComponent {
  isTableOpen = true;
  isFormOpen = false;

  toggleSection(section: string): void {
    if (section === 'table' && !this.isTableOpen) {
      this.isTableOpen = !this.isTableOpen;
      this.isFormOpen = !this.isFormOpen;
    } else if (section === 'form' && !this.isFormOpen) {
      this.isTableOpen = !this.isTableOpen;
      this.isFormOpen = !this.isFormOpen;
    }
  }
}
