import { Component, inject, OnInit, signal } from '@angular/core';
import { ProjectDto } from '../../../core/model/interface/product-list.interface';
import { ProjectService } from '../../../core/service/project.service';

@Component({
  selector: 'app-project-crud',
  standalone: true,
  imports: [],
  templateUrl: './project-crud.component.html',
  styleUrl: './project-crud.component.scss',
})
export class ProjectCrudComponent implements OnInit {
  public listProject = signal<ProjectDto[]>([]);
  private projectService = inject(ProjectService);
  isTableOpen = true;
  isFormOpen = false;

  ngOnInit() {
    this.loadProject()
  }

  loadProject() {
    this.projectService.getAllProjects().subscribe({
      next: ((project) => {
        this.listProject.set(project);
      }),
      error: () => {
        this.listProject.set([]);
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
