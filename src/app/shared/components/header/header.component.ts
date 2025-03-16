import { Component } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  name = '';

  constructor(private userService: UserService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.me(); 
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  me() {
    this.userService.me().subscribe({
      next: (response) => {
        if (response && response.user) {
          this.name = response.user.name; 
        }
      },
      error: () => {
        // this.errorMessage = 'Credenciais inválidas!';
      }
    });
  }
}
