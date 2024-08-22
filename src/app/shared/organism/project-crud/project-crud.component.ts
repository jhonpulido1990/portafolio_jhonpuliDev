import { Component, inject, OnInit, signal } from '@angular/core';
import { ProjectDto } from '../../../core/model/interface/product-list.interface';
import { ProjectService } from '../../../core/service/project.service';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-project-crud',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SkeletonModule],
  templateUrl: './project-crud.component.html',
  styleUrl: './project-crud.component.scss',
})
export class ProjectCrudComponent implements OnInit {
  /* variables */
  public listProject = signal<ProjectDto[]>([]);
  public projectOne = signal<ProjectDto | null>(null);
  private projectService = inject(ProjectService);
  private fb = inject(FormBuilder);
  public isTableOpen = true;
  public isFormOpen = false;

  /* variables formulario */
  public myForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    technologies: this.fb.array([]),
    role: ['', Validators.required],
    imageUrl: ['', Validators.required],
    demoLink: [''],
    repoLink: [''],
    videoLink: [''],
  });

  /* open, clouse tablet */
  toggleSection(section: string): void {
    if (section === 'table' && !this.isTableOpen) {
      this.isTableOpen = !this.isTableOpen;
      this.isFormOpen = !this.isFormOpen;
    } else if (section === 'form' && !this.isFormOpen) {
      this.isTableOpen = !this.isTableOpen;
      this.isFormOpen = !this.isFormOpen;
    }
  }

  // Método para obtener el FormArray
  get technologies(): FormArray {
    return this.myForm.get('technologies') as FormArray;
  }

  // Método para agregar un nuevo item
  addTechnologies(): void {
    const technologiesControl = this.fb.control('');
    this.technologies.push(technologiesControl);
  }

  // Método para eliminar un item
  removeTechnologies(index: number): void {
    this.technologies.removeAt(index);
  }

  /* funcion del crud de experiencia */
  ngOnInit() {
    this.loadProject();
  }

  updateProject(id: string) {
    this.projectService.getOneProject(id).subscribe({
      next: (projecto) => {
        this.projectOne.set(projecto);
        this.myForm.reset(projecto);
        this.myForm.setControl(
          'technologies',
          this.fb.array(projecto.technologies || [])
        );
        this.isTableOpen = !this.isTableOpen;
        this.isFormOpen = !this.isFormOpen;
        this.loadProject();
      },
      error: () => {
        this.projectOne.set(null);
      },
    });
  }

  deleteProject(id: string) {
    this.projectService.deleteProject(id).subscribe({
      next: () => {
        this.loadProject();
        console.log('Borrado exitosamente');
      },
      error: () => {
        console.log('Error al borrar');
      },
    });
  }

  loadProject() {
    this.projectService.getAllProjects().subscribe({
      next: (project) => {
        this.listProject.set(project);
      },
      error: () => {
        this.listProject.set([]);
      },
    });
  }

  clearProject() {
    this.projectOne.set(null);
    this.myForm.reset();
    this.myForm.setControl('technologies', this.fb.array([]));
    this.isTableOpen = !this.isTableOpen;
    this.isFormOpen = !this.isFormOpen;
  }

  /* validar campos de formulario */
  isValidField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Minimo ${errors['minlength'].requiredLength} caracteres`;
      }
    }
    return null;
  }

  // Método para obtener los valores del formulario
  onsubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    if (this.projectOne() && this.myForm.valid) {
      const { id } = this.projectOne()!;
      this.projectService.updateProject(id!, this.myForm.value).subscribe({
        next: () => {
          this.isTableOpen = !this.isTableOpen;
          this.isFormOpen = !this.isFormOpen;
          this.loadProject();
          this.myForm.reset();
          this.myForm.setControl('technologies', this.fb.array([]));
          this.projectOne.set(null);
        },
        error: () => {
          console.log('error al cargar');
        },
      });
      return;
    }
    this.projectService.createProject(this.myForm.value).subscribe({
      next: () => {
        console.log('successo');
        this.myForm.reset();
        this.myForm.setControl('technologies', this.fb.array([]));
        this.loadProject();
        this.isTableOpen = !this.isTableOpen;
        this.isFormOpen = !this.isFormOpen;
      },
      error: () => {
        console.log(this.myForm.value);
        console.log('error al guardar');
      },
    });
  }
}
