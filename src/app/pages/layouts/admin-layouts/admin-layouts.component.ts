import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterModule, RouterOutlet, NavigationEnd } from '@angular/router';
import { AuthService } from '../../../core/service/auth.service';
import { TokenService } from '../../../core/service/token.service';
import { UserAuth } from '../../../core/model/interface/user.interfaces';


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
  public username = signal<UserAuth | null>(null);

  ngOnInit(): void {
    this.username.set(this.authService.currentUser());
  }

  cleartoken() {
    this.authService.logout()
    this.router.navigate(['/home']);
  }
}
