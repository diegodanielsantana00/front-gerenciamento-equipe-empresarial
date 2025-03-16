import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  standalone: true
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) { }

  onRegister() {
    if (this.password == this.confirmPassword) {
      this.authService.register(this.email, this.password, this.name).subscribe({
        next: () => {
          this.router.navigate(['/project']);
        },
        error: () => {
          this.errorMessage = 'Credenciais inválidas!';
        }
      });
    } else {
      this.errorMessage = 'Verifique os dados cadastrado!';
    }


  }
}
