import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService, CartItem } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: CartItem[] = [];

  constructor(private router: Router, private cartService: CartService) {
    this.cart = this.cartService.getCart();
  }

  ngOnInit(): void {}

  confirmOrder() {
    this.router.navigate(['/product/cart-order'], { state: { cart: this.cart } });
  }

  calculateTotalPrice(item: CartItem): number {
    if (item.subCategory === 'Cakes') {
      return (item.originalPrice || item.price) * item.quantity; // Prix par pièce multiplié par le nombre de pièces
    } else {
      return (item.originalPrice || item.price) * (item.quantity / 100); // Prix par 100g multiplié par le facteur de grammage
    }
  }

  removeItem(itemName: string) {
    this.cartService.removeFromCart(itemName);
    this.cart = this.cartService.getCart(); // Mettre à jour la liste locale
  }
}