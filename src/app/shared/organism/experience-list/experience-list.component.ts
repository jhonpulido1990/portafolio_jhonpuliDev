import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Job } from '../../../core/model/interface/experience.interface';
import { ExperienceService } from '../../../core/service/experience.service';

@Component({
  selector: 'app-experience-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-list.component.html',
  styleUrl: './experience-list.component.scss',
})
export class ExperienceListComponent implements OnInit {
  public experiences = signal<Job[]>([]);
  private experienceService = inject(ExperienceService);

  ngOnInit(): void {
    this.loadExperience()
  }

  loadExperience() {
    this.experienceService.getAllExperiences().subscribe({
      next: (experience) => {
        this.experiences.set(experience);
        /* console.log(this.experiences()) */
      },
      error: () => {
        this.experiences.set([]);
      },
    });
  }
  /* jobs: Job[] = [
    {
      company: 'Startup XYZ',
      position: 'Desarrollador Full Stack',
      duration: 'Enero 2022 - Presente',
      responsabilities: [
        'Desarrollar y mantener aplicaciones web usando Angular y Node.js.',
        'Implementar nuevas funcionalidades y mejorar la experiencia de usuario.',
        'Colaborar con el equipo de diseño para crear interfaces atractivas y funcionales.',
      ],
      achievements: [
        'Optimicé el rendimiento de la aplicación, reduciendo el tiempo de carga en un 40%.',
        'Lideré la migración de la base de datos a una nueva arquitectura, mejorando la escalabilidad.',
      ],
      testimonial:
        'Jhon es un desarrollador excepcional con una gran capacidad para resolver problemas complejos. - CEO, Startup XYZ',
    },
    {
      company: 'Freelance',
      position: 'Desarrollador Full Stack',
      duration: 'Junio 2020 - Diciembre 2021',
      responsabilities: [
        'Desarrollar aplicaciones personalizadas para diversos clientes.',
        'Proveer soporte técnico y solucionar problemas de software.',
        'Asesorar a clientes sobre las mejores prácticas de desarrollo y tecnología.',
      ],
      achievements: [
        'Completé más de 20 proyectos freelance con una alta satisfacción de los clientes.',
        'Desarrollé una aplicación de gestión de inventario que aumentó la eficiencia del cliente en un 30%.',
      ],
    },
  ]; */
}
