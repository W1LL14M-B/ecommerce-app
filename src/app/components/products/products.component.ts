import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[] = []; // Variable para almacenar los productos

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getProducts().subscribe(
      (data) => {
        this.products = data; // Almacenar los productos obtenidos de la API
      },
      (error) => {
        console.error('Error al obtener productos', error);
      }
    );
  }
}