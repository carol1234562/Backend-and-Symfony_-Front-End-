import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private router = inject(Router);

  // Listas para cumplir con el requisito de @for en los desplegables
  departments = ['Urgencias', 'UCI', 'Pediatría', 'Cirugía', 'Planta General'];
  shifts = ['Mañana', 'Tarde', 'Noche'];

  // Variables de estado para @if y (click)
  registerStatus: 'idle' | 'success' | 'error' = 'idle';
  registerMessage: string = 'Completa los datos para registrar un nuevo enfermero/a.';
  showPassword: boolean = false;

  // Evento (click) 1: Valida los datos y simula el registro
  registerNurse(name: string, password: string, department: string, shift: string): void {
    if (name.trim().length < 3 || password.trim().length < 4) {
      this.registerStatus = 'error';
      this.registerMessage = 'El nombre debe tener al menos 3 caracteres y la contraseña 4.';
      return;
    }

    this.registerStatus = 'success';
    this.registerMessage = `Enfermero/a ${name.trim()} registrado/a en ${department} (Turno: ${shift}). Redirigiendo al login...`;

    // Redirige a la pantalla de Login tras 1.5 segundos
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1500);
  }

  // Evento (click) 2: Alterna visibilidad de la contraseña
  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }
}