import { Component } from '@angular/core';

@Component({
  selector: 'app-project-crud',
  standalone: true,
  imports: [],
  templateUrl: './project-crud.component.html',
  styleUrl: './project-crud.component.scss',
})
export class ProjectCrudComponent {
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
