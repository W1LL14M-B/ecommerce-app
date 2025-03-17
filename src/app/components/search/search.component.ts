import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {


  searchText: string = '';
  products: any[] = [];
  filteredProducts: any[] = [];

  constructor(private apiService: ApiService) {}

  searchHero() {
    if (this.searchText.trim() === '') {
      this.filteredProducts = [];
      return;
    }

    this.apiService.getProducts().subscribe({
      next: (data) => {
        this.filteredProducts = data.filter((product: any) =>
          product.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
          product.category.toLowerCase().includes(this.searchText.toLowerCase()) ||
          product.price.toString().includes(this.searchText)
        );
      },
      error: (err) => console.error('Error fetching products:', err)
    });
  }

}
