import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
})
export class AccordionComponent {
  public isTableOpen = true;
  public isFormOpen = false;

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
