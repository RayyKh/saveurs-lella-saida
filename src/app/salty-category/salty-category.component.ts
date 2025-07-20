import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-salty-category',
  templateUrl: './salty-category.component.html',
  styleUrls: ['./salty-category.component.scss']
})
export class SaltyCategoryComponent implements OnInit {
  saltyProducts: { name: string, price: number, image: string }[] = [];

  constructor(private router: Router, private productService: ProductService) {
    this.saltyProducts = this.productService.getSaltyProducts();
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