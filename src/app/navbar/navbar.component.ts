import { Component, HostListener, OnInit } from '@angular/core';
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

  // Détecte les clics en dehors de la navbar
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const navbar = document.querySelector('.navbar-collapse');
    const toggler = document.querySelector('.navbar-toggler');
    if (navbar && !navbar.contains(event.target as Node) && toggler && !toggler.contains(event.target as Node)) {
      const collapseElement = document.getElementById('navbarCollapse');
      if (collapseElement && collapseElement.classList.contains('show')) {
        const bsCollapse = new (window as any).bootstrap.Collapse(collapseElement);
        bsCollapse.hide();
      }
    }
  }

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