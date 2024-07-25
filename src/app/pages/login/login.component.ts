import { Component } from '@angular/core';
import { LoginTemplatesComponent } from '../../shared/templates/login-templates/login-templates.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginTemplatesComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
