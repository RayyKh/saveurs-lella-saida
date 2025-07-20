// gateau-category.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gateau-category',
  templateUrl: './gateau-category.component.html',
  styleUrls: ['./gateau-category.component.scss']
})
export class GateauCategoryComponent implements OnInit {
  gateauProducts: { name: string, price: number, image: string }[] = [
    { name: 'Gâteau au Chocolat', price: 25, image: 'assets/img/gateau1.png' },
    { name: 'Gâteau d’Anniversaire', price: 30, image: 'assets/img/gateau2.png' },
    { name: 'Gâteau aux Fruits', price: 22, image: 'assets/img/gateau3.png' }
  ];

  ngOnInit(): void {}
}