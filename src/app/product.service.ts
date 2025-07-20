import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getSweetProducts(): { name: string, price: number, image: string }[] {
    return [
      { name: 'Macaron', price: 5, image: 'assets/img/img7.png' },
      { name: 'Éclair', price: 8, image: 'assets/img/img7.png' },
      { name: 'Tartelette', price: 6, image: 'assets/img/img7.png' }
    ];
  }

  getSaltyProducts(): { name: string, price: number, image: string }[] {
    return [
      { name: 'Brioche Salée', price: 10, image: 'assets/img/img4.png' },
      { name: 'Pizza Artisanale', price: 18, image: 'assets/img/img4.png' },
      { name: 'Samoussa', price: 12, image: 'assets/img/img4.png' }
    ];
  }

  getGateauProducts(): { name: string, price: number, image: string }[] {
    return [
      { name: 'Gâteau au Chocolat', price: 25, image: 'assets/img/img6.png' },
      { name: 'Gâteau d’Anniversaire', price: 30, image: 'assets/img/img6.png' },
      { name: 'Gâteau aux Fruits', price: 22, image: 'assets/img/img6.png' }
    ];
  }
}