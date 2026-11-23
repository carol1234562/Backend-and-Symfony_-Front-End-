import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  // Inyectamos el Router para redirigir por código
  private router = inject(Router);

  // Datos internos privados para validar
  private nurses = [
    { id: 1, name: 'Ana Garcia', shift: 'Mañana', department: 'Urgencias' },
    { id: 2, name: 'Carlos López', shift: 'Tarde', department: 'UCI' },
    { id: 3, name: 'Maria Martinez', shift: 'Noche', department: 'Pediatria' },
    { id: 4, name: 'David Pérez', shift: 'Mañana', department: 'Cirugía' }
  ];

  // Lista pública para cumplir el requisito de @for
  shifts = ['Mañana', 'Tarde', 'Noche'];

  // Variables de estado para @if y evento (click)
  loginStatus: 'idle' | 'success' | 'error' = 'idle';
  loginMessage: string = 'Introduce tus credenciales para acceder.';
  showPassword: boolean = false;

  // Evento (click) 1: Valida el acceso y redirige a Home si es correcto
  validateLogin(nameInput: string, passwordInput: string, selectedShift: string): void {
    const nurseFound = this.nurses.find(
      n => n.name.toLowerCase() === nameInput.trim().toLowerCase()
    );

    if (nurseFound && passwordInput === '1234') {
      this.loginStatus = 'success';
      this.loginMessage = `Bienvenido/a, ${nurseFound.name}. Redirigiendo a Home...`;

      // Redirige a la ruta raíz (Home) tras 1.5 segundos
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 1500);
    } else {
      this.loginStatus = 'error';
      this.loginMessage = 'Usuario o contraseña incorrectos.';
    }
  }

  // Evento (click) 2: Mostrar / ocultar contraseña
  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }
}