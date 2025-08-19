import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService, CartItem } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  cartCount: number = 0;

  constructor(private router: Router, private cartService: CartService) {
    this.cartService.cart$.subscribe((cart: CartItem[]) => {
      this.cartCount = cart.reduce((sum: number, item: CartItem) => sum + item.quantity, 0);
    });
  }

  ngOnInit(): void {}

  public scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  public openCartModal() {
    this.router.navigate(['/cart']);
  }
}