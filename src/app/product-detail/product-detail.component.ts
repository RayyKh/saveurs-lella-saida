import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { CartService, CartItem } from '../cart.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { OrderService } from '../order.service'; // Importer le nouveau service

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      state('void', style({ opacity: 0, transform: 'translate(-50%, -20px)' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'translate(-50%, -20px)' }),
        animate('0.3s ease-in', style({ opacity: 1, transform: 'translate(-50%, 0)' }))
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ opacity: 0, transform: 'translate(-50%, -20px)' }))
      ])
    ])
  ]
})
export class ProductDetailComponent implements OnInit {
  category: string = '';
  subCategory: string = '';
  products: { id: number, name: string, price: number, image: string, subCategory?: string }[] = [];
  cart: CartItem[] = [];
  firstName: string = '';
  lastName: string = '';
  address: string = '';
  phone: string = '';
  isPickup: boolean = false;
  isCashOnDelivery: boolean = false;
  showSuccessToast: boolean = false;
  showOrderModal: boolean = false;
  selectedGrammages: { [key: string]: number } = {};

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private cartService: CartService,
    private orderService: OrderService // Injecter le service OrderService
  ) {
    this.cartService.cart$.subscribe((cart: CartItem[]) => {
      this.cart = cart;
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category') || '';
      this.subCategory = params.get('subCategory') || '';
      if (this.category === 'cart-order') {
        this.cart = this.cartService.getCart();
        this.openOrderModal();
      } else if (this.subCategory) {
        this.products = this.productService.getProductsBySubCategory(this.category, this.subCategory);
      } else {
        this.products = this.productService.getProductsByCategory(this.category);
      }
      if (this.products.length === 0) {
        console.warn(`No products found for category: ${this.category}, subCategory: ${this.subCategory}`);
      }
    });
  }

  onGrammageChange(event: Event, product: { id: number, name: string, price: number, image: string, subCategory?: string }) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedGrammages[product.name] = Number(selectElement.value);
  }

  addToCart(product: { id: number, name: string, price: number, image: string, subCategory?: string }) {
    const quantity = this.selectedGrammages[product.name] || (product.subCategory === 'Cakes' ? 1 : 500);
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      originalPrice: product.price,
      image: product.image,
      subCategory: product.subCategory
    };
    this.cartService.addToCart(cartItem);
    this.showSuccessToast = true;
    setTimeout(() => {
      this.showSuccessToast = false;
    }, 3000);
    this.selectedGrammages[product.name] = product.subCategory === 'Cakes' ? 1 : 500;
  }

  calculateTotalPrice(item: CartItem): number {
    const baseUnit = item.subCategory === 'Cakes' ? 1 : 500; // Poulet, Thon, Viande, and Ghraiba use 500g
    return (item.quantity / baseUnit) * item.price;
  }

  continueShopping() {
    if (this.subCategory) {
      this.router.navigate([`/product/${this.category}/${this.subCategory}`]);
    } else if (this.category) {
      this.router.navigate([`/${this.category}-category`]);
    } else {
      this.router.navigate(['/']);
    }
    this.closeSuccessToast();
  }

  goToCart() {
    this.router.navigate(['/cart']);
    this.closeSuccessToast();
  }

  openOrderModal() {
    if (this.cart.length === 0) {
      alert('Votre panier est vide.');
      this.router.navigate(['/']);
      return;
    }
    this.showOrderModal = true;
  }

  closeOrderModal() {
    this.showOrderModal = false;
    this.firstName = '';
    this.lastName = '';
    this.address = '';
    this.phone = '';
    this.isPickup = false;
    this.isCashOnDelivery = false;
  }

  closeSuccessToast() {
    this.showSuccessToast = false;
  }

  submitOrder(form: any) {
    if (form.valid) {
      const orderData = {
        firstName: this.firstName,
        lastName: this.lastName,
        address: this.address,
        phone: this.phone,
        deliveryOption: this.isPickup ? 'Retrait de la boutique' : 'Livraison à domicile',
        items: this.cart.map(item => ({
          productName: item.name,
          productId: item.id,
          quantity: item.quantity,
          price: item.price,
          subCategory: item.subCategory
        }))
      };
      this.orderService.submitOrder(orderData).subscribe({
        next: (response) => {
          console.log('Order submitted successfully:', response);
          alert('Commande envoyée avec succès !');
          this.cartService.clearCart();
          this.closeOrderModal();
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Error submitting order:', error);
          alert('Erreur lors de l\'envoi de la commande. Veuillez réessayer. Détail : ' + (error.status ? error.status + ' - ' + error.statusText : error.message));
        }
      });
    } else {
      alert('Veuillez remplir tous les champs requis.');
    }
  }

  getGrammageOptions(subCategory?: string): number[] {
    if (subCategory === 'Cakes') {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    } else {
      // Poulet, Thon, Viande, and Ghraiba use 500g-based options
      return [500, 750, 1000, 1500, 2000, 2500, 5000];
    }
  }
}