import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-admin-layouts',
  standalone: true,
  imports: [RouterOutlet, MenubarModule, PanelMenuModule],
  templateUrl: './admin-layouts.component.html',
  styleUrl: './admin-layouts.component.scss',
})
export class AdminLayoutsComponent implements OnInit {
  items: MenuItem[] = [];
  adminMenu: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        routerLink: ['/'],
      },
      {
        label: 'Cerrar Sesión',
        icon: 'pi pi-sign-out',
        command: () => {
          // Lógica para cerrar sesión
        },
      },
    ];

    this.adminMenu = [
      {
        label: 'Blog',
        icon: 'pi pi-book',
        routerLink: ['/admin/blog'],
      },
      {
        label: 'Experiencia',
        icon: 'pi pi-briefcase',
        routerLink: ['/admin/experience'],
      },
      {
        label: 'Proyectos',
        icon: 'pi pi-th-large',
        routerLink: ['/admin/projects'],
      },
    ];
  }
}
