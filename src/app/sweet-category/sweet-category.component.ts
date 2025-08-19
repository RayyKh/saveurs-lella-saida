import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sweet-category',
  templateUrl: './sweet-category.component.html',
  styleUrls: ['./sweet-category.component.scss']
})
export class SweetCategoryComponent implements OnInit {
  subCategories: string[] = ['Ghraiba', 'Kaak Warka', 'Baklawa', 'Hlow Classique', 'Cakes', 'Zrir'];

  // Objet associant chaque sous-catégorie à une image
  subCategoryImages: { [key: string]: string } = {
    'Ghraiba': 'assets/img/ghraibaCategorie.jpg',
    'Kaak Warka': 'assets/img/kaakwarka.webp',
    'Baklawa': 'assets/img/baklawanoisette.jpg',
    'Hlow Classique': 'assets/img/hlow.jpg',
    'Cakes': 'assets/img/cake.jpeg',
    'Zrir': 'assets/img/zrirnoisette.jpg'
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToSubCategory(subCategory: string) {
    console.log('Navigating to sub-category:', ['/product', 'sweet', subCategory]);
    this.router.navigate(['/product', 'sweet', subCategory]).then(success => {
      if (!success) {
        console.error('Navigation failed');
      }
    });
  }
}