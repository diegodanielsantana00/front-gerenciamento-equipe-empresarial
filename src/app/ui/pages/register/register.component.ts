import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  onSubmit() {
    if (this.password === this.confirmPassword) {
      console.log('Nome:', this.name);
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      // Aqui você pode chamar o caso de uso para registrar o usuário
    } else {
      console.log('As senhas não coincidem');
    }
  }
}
