import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sweet-category',
  templateUrl: './sweet-category.component.html',
  styleUrls: ['./sweet-category.component.scss']
})
export class SweetCategoryComponent implements OnInit {
  sweetProducts: { name: string, price: number, image: string }[] = [
    { name: 'Makroudh', price: 15, image: 'assets/img/img3.png' },
    { name: 'Sablé', price: 12, image: 'assets/img/img6.png' },
    { name: 'Baklawa', price: 20, image: 'assets/img/img7.png' },
    { name: 'Kaak Warka', price: 15, image: 'assets/img/product-3.jpg' },
    { name: 'Kaaber Louz', price: 12, image: 'assets/img/img4.png' },
    { name: 'Samsa', price: 20, image: 'assets/img/product-1.jpg' },
    { name: 'Bjaouia', price: 15, image: 'assets/img/img3.png' },
    { name: 'Mlabes', price: 12, image: 'assets/img/img6.png' },
    { name: 'Ghraiba Homs', price: 20, image: 'assets/img/img7.png' },
    { name: 'Kaak Warka', price: 15, image: 'assets/img/product-3.jpg' },
    { name: 'Kaaber Louz', price: 12, image: 'assets/img/img4.png' },
    { name: 'Samsa', price: 20, image: 'assets/img/product-1.jpg' }
  ];

  ngOnInit(): void {}
}