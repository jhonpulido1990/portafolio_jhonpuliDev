import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, OnDestroy, OnInit } from '@angular/core';
import { RutaNavbar } from '../../../core/model/interface/route_menu.interface';
import { RouterModule } from '@angular/router';
import { TokenService } from '../../../core/service/token.service';
import { AuthService } from '../../../core/service/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  public isActive = false;
  private tokenService = inject(TokenService);
  private authService = inject(AuthService);
  public username: string | null = null;

  public ruta: RutaNavbar[] = [
    { path: '/about', name: 'Sobre mi' },
    { path: '/projects', name: 'Projectos' },
    { path: '/experience', name: 'Experiencia' },
    { path: '/blog', name: 'Blog' },
    { path: '/contact', name: 'Contacto' },
    { path: '/auth/login', name: 'Login' },
  ];

  ngOnInit(): void {
    this.checkWindowWidth();
    const token = this.tokenService.getToken();
    if (token) {
      this.authService.verifyToken(token).subscribe({
        next: (response) => {
          this.username = response.payload.username;
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }

  changeActive(): void {
    this.isActive = !this.isActive;
    this.checkWindowWidth();
    if (!this.isActive) {
      const checkbox = document.getElementById('check') as HTMLInputElement;
      if (checkbox) {
        checkbox.checked = false;
      }
    }
  }

  @HostListener('window:resize', [])
  onResize(): void {
    this.checkWindowWidth();
  }

  checkWindowWidth(): void {
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      this.isActive = false;
      const checkbox = document.getElementById('check') as HTMLInputElement;
      if (checkbox) {
        checkbox.checked = false;
      }
    }
  }
}
