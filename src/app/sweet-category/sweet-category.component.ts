import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-sweet-category',
  templateUrl: './sweet-category.component.html',
  styleUrls: ['./sweet-category.component.scss']
})
export class SweetCategoryComponent implements OnInit {
  sweetProducts: { name: string, price: number, image: string }[] = [];

  constructor(private router: Router, private productService: ProductService) {
    this.sweetProducts = this.productService.getSweetProducts();
  }

  ngOnInit(): void {}

  navigateToProduct(index: number, category: string) {
    console.log('Navigating to:', ['/product', index, category]); // Débogage
    this.router.navigate(['/product', index, category]).then(success => {
      if (!success) {
        console.error('Navigation failed');
      }
    });
  }
}