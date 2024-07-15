import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  public showContent: boolean = true;

  private router = inject(Router);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkRoute();
      });
    // Verificar la ruta actual al inicializar el componente
    this.checkRoute();
  }

  checkRoute(): void {
    const hiddenRoutes = ['home']; // rutas donde deseas mostrar el contenido
    const currentRoute = this.route.snapshot.firstChild?.routeConfig?.path;

    if (currentRoute && hiddenRoutes.includes(currentRoute)) {
      this.showContent = true;
    } else {
      this.showContent = false;
    }
  }
}
