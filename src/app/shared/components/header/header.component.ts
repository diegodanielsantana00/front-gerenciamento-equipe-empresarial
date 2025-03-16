import { Component } from '@angular/core';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  name = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.me(); 
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
