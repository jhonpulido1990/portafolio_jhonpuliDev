import { Component, inject, OnInit, signal } from '@angular/core';
import { ProjectList } from '../../../core/model/interface/product-list.interface';
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
  public project = signal<ProjectList[]>([]);
  private projectService = inject(ProjectService);
  responsiveOptions: any[] | undefined;
  /* public projects: ProjectList[] = [
    {
      title: 'portafolio jhonpuli',
      description: 'Descripción del proyecto 1',
      technologies: ['Angular', 'Node.js', 'Express', 'MongoDB'],
      role: 'Desarrollador Full Stack',
      imageUrl: '../../../../assets/imagen/fondoHeader/imagen1.jpeg',
      demoLink: 'http://demo-link.com',
      repoLink: 'http://github-repo-link.com',
    },
    {
      title: 'portafolio projeccion 3d',
      description: 'Descripción del proyecto 2',
      technologies: ['React', 'Firebase'],
      role: 'Desarrollador Frontend',
      imageUrl: '../../../../assets/imagen/fondoHeader/imagen1.jpeg',
      demoLink: 'http://demo-link.com',
      repoLink: 'http://github-repo-link.com',
    },
    {
      title: 'e-commerce rcpiscina',
      description: 'Descripción del proyecto 1',
      technologies: ['Angular', 'Node.js', 'Express', 'MongoDB'],
      role: 'Desarrollador Full Stack',
      imageUrl: '../../../../assets/imagen/fondoHeader/imagen1.jpeg',
      demoLink: 'http://demo-link.com',
      repoLink: 'http://github-repo-link.com',
    },
    {
      title: 'rick and morty',
      description: 'Descripción del proyecto 2',
      technologies: ['React', 'Firebase'],
      role: 'Desarrollador Frontend',
      imageUrl: 'path/to/project2.jpg',
      demoLink: 'http://demo-link.com',
      repoLink: 'http://github-repo-link.com',
    },
    {
      title: 'Delatinos',
      description: 'Descripción del proyecto 1',
      technologies: ['Angular', 'Node.js', 'Express', 'MongoDB'],
      role: 'Desarrollador Full Stack',
      imageUrl: 'path/to/project1.jpg',
      demoLink: 'http://demo-link.com',
      repoLink: 'http://github-repo-link.com',
    },
    {
      title: 'mascotas en casa',
      description: 'Descripción del proyecto 2',
      technologies: ['React', 'Firebase'],
      role: 'Desarrollador Frontend',
      imageUrl: 'path/to/project2.jpg',
      demoLink: 'http://demo-link.com',
      repoLink: 'http://github-repo-link.com',
    },
    {
      title: 'buen toro',
      description: 'Descripción del proyecto 2',
      technologies: ['React', 'Firebase'],
      role: 'Desarrollador Frontend',
      imageUrl: 'path/to/project2.jpg',
      demoLink: 'http://demo-link.com',
      repoLink: 'http://github-repo-link.com',
    },
    {
      title: 'landing page rankcv',
      description: 'Descripción del proyecto 2',
      technologies: ['React', 'Firebase'],
      role: 'Desarrollador Frontend',
      imageUrl: 'path/to/project2.jpg',
      demoLink: 'http://demo-link.com',
      repoLink: 'http://github-repo-link.com',
    },
  ]; */

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
        /* console.log(projects); */
      },
      error: () => {
        this.project.set([]);
      }
    });
  }
}
