import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { TokenService } from '../service/token.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const tokenService = inject(TokenService);
  const router = inject(Router);

  const token = tokenService.getToken();

  if (!token) {
    router.navigate(['/home']);
    return false;
  }

  /* authService.verifyToken(token).subscribe({
    next: (response) => {
      if (response.valid) {
        console.log('aqui')
        return true;
      } else {
        router.navigate(['/home'])
        return false;
      }
    },
    error: (error) => {
      router.navigate(['/home'])
      return false;
    }
  }) */

  if (authService.verifyToken(token).subscribe()) return true;

  router.navigate(['/home'])
  return false;
};
