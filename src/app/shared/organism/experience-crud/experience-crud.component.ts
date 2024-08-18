import { Component, inject, OnInit, signal } from '@angular/core';
import { ExperienceDto } from '../../../core/model/interface/experience.interface';
import { ExperienceService } from '../../../core/service/experience.service';

@Component({
  selector: 'app-experience-crud',
  standalone: true,
  imports: [],
  templateUrl: './experience-crud.component.html',
  styleUrl: './experience-crud.component.scss',
})
export class ExperienceCrudComponent implements OnInit {
  public listExperience = signal<ExperienceDto[]>([]);
  private experienceService = inject(ExperienceService);
  isTableOpen = true;
  isFormOpen = false;

  ngOnInit(): void {
    this.loadExperience()
  }

  loadExperience() {
    this.experienceService.getAllExperiences().subscribe({
      next: ((experience) => {
        this.listExperience.set(experience);
      }),
      error: () => {
        this.listExperience.set([]);
      }
    })
  }

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
