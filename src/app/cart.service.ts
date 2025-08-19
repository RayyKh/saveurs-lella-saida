import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  originalPrice?: number;
  image?: string;
  subCategory?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);

  cart$ = this.cartSubject.asObservable();

  addToCart(item: CartItem) {
    const cartItem = this.cart.find(i => i.name === item.name);
    if (cartItem) {
      cartItem.quantity += item.quantity;
    } else {
      this.cart.push({ ...item });
    }
    this.cartSubject.next([...this.cart]);
  }

  getCart(): CartItem[] {
    return this.cart;
  }

  removeFromCart(itemName: string) {
    this.cart = this.cart.filter(item => item.name !== itemName);
    this.cartSubject.next([...this.cart]);
  }

  clearCart() {
    this.cart = [];
    this.cartSubject.next([]);
  }
}