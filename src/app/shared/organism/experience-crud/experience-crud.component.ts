import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-crud',
  standalone: true,
  imports: [],
  templateUrl: './experience-crud.component.html',
  styleUrl: './experience-crud.component.scss',
})
export class ExperienceCrudComponent {
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
