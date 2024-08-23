import { Component, inject, OnInit, signal } from '@angular/core';
import { ProjectDto } from '../../../core/model/interface/product-list.interface';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { ProjectService } from '../../../core/service/project.service';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, CarouselModule, ButtonModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss',
})
export class ProjectListComponent implements OnInit {
  public project = signal<ProjectDto[]>([]);
  private projectService = inject(ProjectService);
  responsiveOptions: any[] | undefined;

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
    this.loadProject()
  }

  loadProject() {
    this.projectService.getAllProjects().subscribe({
      next: (projects) => {
        this.project.set(projects);
      },
      error: () => {
        this.project.set([]);
      }
    });
  }
}
