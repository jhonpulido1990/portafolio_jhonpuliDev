import { Component, inject, OnInit, signal } from '@angular/core';
import { ExperienceDto } from '../../../core/model/interface/experience.interface';
import { ExperienceService } from '../../../core/service/experience.service';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience-crud',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './experience-crud.component.html',
  styleUrl: './experience-crud.component.scss',
})
export class ExperienceCrudComponent implements OnInit {
  /* variables */
  public listExperience = signal<ExperienceDto[]>([]);
  public experienceOne = signal<ExperienceDto | null>(null);
  private experienceService = inject(ExperienceService);
  private fb = inject(FormBuilder);
  public isTableOpen = true;
  public isFormOpen = false;

  /* variables formulario */
  public myForm: FormGroup = this.fb.group({
    company: ['', [Validators.required]],
    position: ['', [Validators.required]],
    duration: ['', [Validators.required]],
    responsabilities: this.fb.array([]),
    achievements: this.fb.array([]),
    testimonial: [''],
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
  get responsabilities(): FormArray {
    return this.myForm.get('responsabilities') as FormArray;
  }

  get achievements(): FormArray {
    return this.myForm.get('achievements') as FormArray;
  }

  // Método para agregar un nuevo item
  addResponsabilities(): void {
    const responsibilityControl = this.fb.control('');
    this.responsabilities.push(responsibilityControl);
  }

  addAchievements(): void {
    const achievementsControl = this.fb.control('');
    this.achievements.push(achievementsControl);
  }

  // Método para eliminar un item
  removeResponsabilities(index: number): void {
    this.responsabilities.removeAt(index);
  }

  removeAchievements(index: number): void {
    this.achievements.removeAt(index);
  }

  /* funcion del crud de experiencia */
  ngOnInit(): void {
    this.loadExperience();
  }

  updateExperience(id: string) {
    this.experienceService.getOneExperience(id).subscribe({
      next: (experience) => {
        this.experienceOne.set(experience);
        this.myForm.reset(experience);
        this.myForm.setControl(
          'responsabilities',
          this.fb.array(experience.responsabilities || [])
        );
        this.myForm.setControl(
          'achievements',
          this.fb.array(experience.achievements || [])
        );
        this.isTableOpen = !this.isTableOpen;
        this.isFormOpen = !this.isFormOpen;
        this.loadExperience();
      },
      error: () => {
        this.experienceOne.set(null);
      },
    });
  }

  deleteExperience(id: string) {
    this.experienceService.deleteExperience(id).subscribe({
      next: () => {
        this.loadExperience();
        console.log('borrado exitosamente');
      },
      error: () => {
        console.log('error al borrar');
      },
    });
  }

  loadExperience() {
    this.experienceService.getAllExperiences().subscribe({
      next: (experience) => {
        this.listExperience.set(experience);
      },
      error: () => {
        this.listExperience.set([]);
      },
    });
  }

  clearExperience() {
    this.experienceOne.set(null);
    this.myForm.reset();
    this.myForm.setControl('responsabilities', this.fb.array([]));
    this.myForm.setControl('achievements', this.fb.array([]));
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
  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    if (this.experienceOne() && this.myForm.valid) {
      const { id } = this.experienceOne()!;
      this.experienceService
        .updateExperience(id!, this.myForm.value)
        .subscribe({
          next: () => {
            this.isTableOpen = !this.isTableOpen;
            this.isFormOpen = !this.isFormOpen;
            this.loadExperience();
            this.myForm.reset();
            this.myForm.setControl('responsabilities', this.fb.array([]));
            this.myForm.setControl('achievements', this.fb.array([]));
            this.experienceOne.set(null);
          },
          error: () => {
            console.log('error al cargar');
          },
        });
      return;
    }
    this.experienceService.createExperience(this.myForm.value).subscribe({
      next: () => {
        console.log('successo');
        this.myForm.reset();
        this.myForm.setControl('responsabilities', this.fb.array([]));
        this.myForm.setControl('achievements', this.fb.array([]));
        this.loadExperience();
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
