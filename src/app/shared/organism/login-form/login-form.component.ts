import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../core/service/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../../../core/service/token.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  public errorMessage: string | null = null;
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private tokenService = inject(TokenService);
  private router = inject(Router);
  public myForm: FormGroup = this.fb.group({
    username: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.pattern(this.emailPattern),
      ],
    ],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });

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

        case 'email':
          return `Debe tener formato de correo`;

        case 'pattern':
          return `Aun no cumple el formato de correo`;
      }
    }
    return null;
  }

  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    // Aquí puedes agregar la lógica para enviar el mensaje
    this.authService.login(this.myForm.value).subscribe({
      next: (response) => {
        this.tokenService.setToken(response.token);
        this.router.navigate(['/admin/blog'])
      },
      error: (error) => {
        console.log(error);
        this.errorMessage = 'invalid username or password: ' + error;
      }
    })
    console.log('Formulario enviado', this.myForm.value);
    this.myForm.reset();
  }
}
