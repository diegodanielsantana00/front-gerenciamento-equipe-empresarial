import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (typeof window !== 'undefined') {
    if (authService.isAuthenticated()) {
      return true;
    } else {
      console.log("nao autenticado 1")
      authService.logout()
      router.navigate(['/login']);
      return false;
    }
  }
  return false;
};

export const authGuardLoginRegister: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (typeof window !== 'undefined') {
    if (authService.isAuthenticated()) {
      router.navigate(['/project']);
      return false;
    } else {  
      console.log("nao autenticado 2")
      authService.logout()
      return true;
    }
  }
  return false;
};
