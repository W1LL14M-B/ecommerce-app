import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private apiService: ApiService) {}

  isModalOpen = false;

  userLogin = {
    nombre: '',
    identificacion: '',
  };

  user = {
    nombre: '',
    identificacion: '',
    correo: '',
  };


    async loginUser() {
      try {
        const response = await firstValueFrom(this.apiService.loginUser(this.userLogin));
        console.log('Respuesta del backend:', response);
        
        if (response.success) {
          alert('Inicio de sesión exitoso');
          this.router.navigate(['/navbar']);
        } else {
          alert('Credenciales incorrectas');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
        alert('Error al iniciar sesión');
      }
    }
    
    async registerUser() {
      try {
        const response = await firstValueFrom(this.apiService.registerUser(this.user));
        console.log('Usuario registrado correctamente:', response);
        alert('Usuario registrado exitosamente');
        this.closeModal();
      } catch (error) {
        console.error('Error al registrar usuario:', error);
        alert('Error al registrar usuario');
      }
    }

  openModal(event: Event) {
    event.preventDefault();
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
