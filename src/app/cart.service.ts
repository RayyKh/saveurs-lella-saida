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

  constructor() {
    // Récupérer le panier depuis localStorage au démarrage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
      this.cartSubject.next([...this.cart]); // Mettre à jour le sujet avec les données sauvegardées
    }
  }

  addToCart(item: CartItem) {
    const cartItem = this.cart.find(i => i.name === item.name);
    if (cartItem) {
      cartItem.quantity += item.quantity;
    } else {
      this.cart.push({ ...item });
    }
    this.saveCart(); // Sauvegarder après ajout
    this.cartSubject.next([...this.cart]);
  }

  getCart(): CartItem[] {
    return this.cart;
  }

  removeFromCart(itemName: string) {
    this.cart = this.cart.filter(item => item.name !== itemName);
    this.saveCart(); // Sauvegarder après suppression
    this.cartSubject.next([...this.cart]);
  }

  clearCart() {
    this.cart = [];
    this.saveCart(); // Sauvegarder après vidage
    this.cartSubject.next([]);
  }

  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart)); // Sauvegarder dans localStorage
  }
}