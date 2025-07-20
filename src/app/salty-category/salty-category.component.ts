// salty-category.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salty-category',
  templateUrl: './salty-category.component.html',
  styleUrls: ['./salty-category.component.scss']
})
export class SaltyCategoryComponent implements OnInit {
  saltyProducts: { name: string, price: number, image: string }[] = [
    { name: 'Brioche Salée', price: 10, image: 'assets/img/salty1.png' },
    { name: 'Pizza Artisanale', price: 18, image: 'assets/img/salty2.png' },
    { name: 'Samoussa', price: 12, image: 'assets/img/salty3.png' }
  ];

  ngOnInit(): void {}
}