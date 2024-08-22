import { Component, inject, OnInit, signal } from '@angular/core';
import { BlogDto } from '../../../core/model/interface/blog.interface';
import { BlogService } from '../../../core/service/blog.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-blog-crud',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SkeletonModule],
  templateUrl: './blog-crud.component.html',
  styleUrl: './blog-crud.component.scss',
})
export class BlogCrudComponent implements OnInit {
  /* variables */
  public listBlog = signal<BlogDto[]>([]);
  public blogOne = signal<BlogDto | null>(null);
  private blogService = inject(BlogService);
  private fb = inject(FormBuilder);
  public isTableOpen = true;
  public isFormOpen = false;

  /* variables formulario */
  public myForm: FormGroup = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    link: ['', [Validators.required]],
    date: ['', [Validators.required]],
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

  /* funciones de crud del blog */
  ngOnInit(): void {
    this.loadProject();
  }

  updateBlog(id: string) {
    this.blogService.getOneBlog(id).subscribe({
      next: (blog) => {
        this.blogOne.set(blog);
        this.myForm.reset(blog);
        this.isTableOpen = !this.isTableOpen;
        this.isFormOpen = !this.isFormOpen;
        this.loadProject();
      },
      error: () => {
        this.blogOne.set(null);
      },
    });
  }

  deleteBlog(id: string) {
    this.blogService.deleteBlog(id).subscribe({
      next: () => {
        this.loadProject();
        console.log('borrado exitosamente');
      },
      error: () => {
        console.log('error al borrar')
      }
    })
  }

  loadProject() {
    this.blogService.getAllBlogs().subscribe({
      next: (blogs) => {
        this.listBlog.set(blogs);
        /* console.log(blogs) */
      },
      error: () => {
        this.listBlog.set([]);
      },
    });
  }

  clearBlog () {
    this.myForm.reset();
    this.blogOne.set(null);
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

  /* funcion envio de datos */
  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    if (this.blogOne() && this.myForm.valid) {
      const { id } = this.blogOne()!;
      this.blogService.updateBlog(id!, this.myForm.value).subscribe({
        next: () => {
          this.isTableOpen = !this.isTableOpen;
          this.isFormOpen = !this.isFormOpen;
          this.loadProject();
          this.myForm.reset();
          this.blogOne.set(null);
        },
        error: () => {
          console.log('error al cargar')
        }
      });
      return;
    }
    this.blogService.createBlog(this.myForm.value).subscribe({
      next: () => {
        console.log('successo');
        this.myForm.reset();
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
