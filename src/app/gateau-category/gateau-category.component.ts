import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-gateau-category',
  templateUrl: './gateau-category.component.html',
  styleUrls: ['./gateau-category.component.scss']
})
export class GateauCategoryComponent implements OnInit {
  gateauProducts: { name: string, price: number, image: string }[] = [];

  constructor(private router: Router, private productService: ProductService) {
    this.gateauProducts = this.productService.getGateauProducts();
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