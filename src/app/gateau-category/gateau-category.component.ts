import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-gateau-category',
  templateUrl: './gateau-category.component.html',
  styleUrls: ['./gateau-category.component.scss']
})
export class GateauCategoryComponent implements OnInit {
  subCategories: string[] = ['Chocolat', 'Anniversaire', 'Fruits', 'Fiançailles', 'Personnalisé'];

  subCategoryImages: { [key: string]: string } = {
    'Chocolat': 'assets/img/chocolat.jpg',
    'Anniversaire': 'assets/img/anniversaire.jpg',
    'Fruits': 'assets/img/fruits.jpg',
    'Fiançailles': 'assets/img/fiancailles.jpg',
    'Personnalisé': 'assets/img/personnalise.jpg'
  };

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {}

  navigateToSubCategory(subCategory: string) {
    this.router.navigate(['/product', 'gateau', subCategory]).then(success => {
      if (!success) {
        console.error('Navigation failed');
      }
    });
  }
}