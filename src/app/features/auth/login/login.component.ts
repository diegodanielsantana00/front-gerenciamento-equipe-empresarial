import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false
})

export default class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) { }

  onLogin() {
    this.authService.login(this.email, this.password).subscribe({
      next: () => {
        this.router.navigate(['/kaban']);
      },
      error: () => {
        this.errorMessage = 'Credenciais inválidas!';
      }
    });
  }
}
