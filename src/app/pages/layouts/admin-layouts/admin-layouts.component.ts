import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet, NavigationEnd } from '@angular/router';
import { AuthService } from '../../../core/service/auth.service';
import { TokenService } from '../../../core/service/token.service';
import { error } from 'console';


@Component({
  selector: 'app-admin-layouts',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './admin-layouts.component.html',
  styleUrl: './admin-layouts.component.scss',
})
export class AdminLayoutsComponent implements OnInit {
  private authService = inject(AuthService);
  public tokenService = inject(TokenService);
  private router = inject(Router)
  public username: string | null = null;

  ngOnInit(): void {
    const  token  = this.tokenService.getToken()
    if (token) {
      this.authService.verifyToken(token).subscribe({
        next: (response) => {
          this.username = response.payload.username;
        },
        error: (error) => {
          console.log(error)
        }
      })
    }
  }

  cleartoken() {
    this.tokenService.clearToken()
    this.router.navigate(['/home']);
  }
}
