import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-gateau-category',
  templateUrl: './gateau-category.component.html',
  styleUrls: ['./gateau-category.component.scss']
})
export class GateauCategoryComponent implements OnInit {
  subCategories: string[] = ['Anniversaire', 'Fiançailles', 'Personnalisé'];
  subCategoryImages: { [key: string]: string } = {
    'Anniversaire': 'assets/img/anniv.jpg',
    'Fiançailles': 'assets/img/fiancaille.jpg',
    'Personnalisé': 'assets/img/perso.jpg'
  };
  subCategoryDescriptions: { subCategory: string, sizes: { size: number, price: number }[], contact: string }[] = [];
  flippedCards: { [key: string]: boolean } = {};

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    console.log('SubCategories:', this.subCategories);
    this.subCategoryDescriptions = this.productService.getSubCategoryDescriptions();
    console.log('SubCategory Descriptions:', this.subCategoryDescriptions);
    this.subCategories.forEach(subCategory => {
      this.flippedCards[subCategory] = false;
    });
    console.log('Flipped Cards:', this.flippedCards);
  }

  toggleFlip(subCategory: string) {
    this.flippedCards[subCategory] = !this.flippedCards[subCategory];
    console.log(`Toggled flip for ${subCategory}:`, this.flippedCards[subCategory]);
  }

  getDescription(subCategory: string) {
    const desc = this.subCategoryDescriptions.find(d => d.subCategory === subCategory);
    console.log(`Description for ${subCategory}:`, desc);
    return desc;
  }
}