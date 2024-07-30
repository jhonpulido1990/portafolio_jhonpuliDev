import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { RutaNavbar } from '../../../core/model/interface/route_menu.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  public isActive = false;

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
