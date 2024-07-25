import { Component } from '@angular/core';
import { LoginFormComponent } from '../../organism/login-form/login-form.component';

@Component({
  selector: 'app-login-templates',
  standalone: true,
  imports: [LoginFormComponent],
  templateUrl: './login-templates.component.html',
  styleUrl: './login-templates.component.scss'
})
export class LoginTemplatesComponent {

}
