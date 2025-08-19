import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-salty-category',
  templateUrl: './salty-category.component.html',
  styleUrls: ['./salty-category.component.scss']
})
export class SaltyCategoryComponent implements OnInit {
  subCategories: string[] = ['Poulet', 'Thon', 'Viande', 'Fruit de mer'];

  // Objet associant chaque sous-catégorie à une image
  subCategoryImages: { [key: string]: string } = {
    'Poulet': 'assets/img/poulet.jpg',
    'Thon': 'assets/img/thon.jpg',
    'Viande': 'assets/img/tarteviande.jpg',
    'Fruit de mer': 'assets/img/fruitdemer.jpg'
  };

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {}

  navigateToSubCategory(subCategory: string) {
    console.log('Navigating to sub-category:', ['/product', 'salty', subCategory]);
    this.router.navigate(['/product', 'salty', subCategory]).then(success => {
      if (!success) {
        console.error('Navigation failed');
      }
    });
  }
}