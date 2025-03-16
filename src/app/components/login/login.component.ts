import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  
  email: string = '';
  password: string = ''; 
  
  constructor(private router: Router) { } 


   onLogin() {
    console.log('Usuario autenticado correctamente');
    this.router.navigate(['/navbar']);
  }
 

  isModalOpen = false;
  
  user = {
    nombre: '',
    identificacion: '',
    correo: ''
  };

  registerUser() {
    console.log('Usuario registrado:', this.user);

  }

  openModal(event: Event) {
    event.preventDefault(); 
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
