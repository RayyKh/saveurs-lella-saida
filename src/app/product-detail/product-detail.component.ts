import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productIndex: number = 0;
  categoryType: string = '';
  productName: string = '';
  productDescription: string = '';
  productPrice: number = 0;
  productImage: string = '';
  quantity: number = 1;
  firstName: string = '';
  lastName: string = '';
  address: string = '';
  phone: string = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const indexParam = this.route.snapshot.paramMap.get('index');
    this.productIndex = indexParam ? +indexParam : 0; // Vérifie si indexParam existe avant conversion

    const categoryParam = this.route.snapshot.paramMap.get('category');
    this.categoryType = categoryParam || ''; // Valeur par défaut si null/undefined
    console.log('Params:', { index: this.productIndex, category: this.categoryType }); // Débogage

    let products: { name: string, price: number, image: string }[] = [];
    if (this.categoryType === 'sweet') {
      products = this.productService.getSweetProducts();
    } else if (this.categoryType === 'salty') {
      products = this.productService.getSaltyProducts();
    } else if (this.categoryType === 'gateau') {
      products = this.productService.getGateauProducts();
    } else {
      console.error('Category not recognized:', this.categoryType);
      return; // Arrête l'exécution si la catégorie est invalide
    }

    if (this.productIndex >= 0 && this.productIndex < products.length) {
      const product = products[this.productIndex];
      this.productName = product.name;
      this.productPrice = product.price;
      this.productImage = product.image;
      this.productDescription = `${this.categoryType === 'salty' ? 'Savoureux' : this.categoryType === 'gateau' ? 'Élégant' : 'Délicieux'} ${product.name} préparé avec soin.`;
    } else {
      console.error('Index out of bounds:', this.productIndex, 'for category:', this.categoryType, 'Length:', products.length);
    }
  }

  addToCart() {
    const modal = document.getElementById('orderModal');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
      modal.setAttribute('aria-hidden', 'false');
      console.log('Modal should be visible now');
    } else {
      console.error('Modal element not found');
    }
  }

  closeOrderModal() {
    const modal = document.getElementById('orderModal');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
    }
  }

  submitOrder(form: any) {
    if (form.valid) {
      const orderData = {
        productName: this.productName,
        productId: this.productIndex,
        quantity: this.quantity,
        firstName: this.firstName,
        lastName: this.lastName,
        address: this.address,
        phone: this.phone
      };

      this.http.post('http://localhost:8081/api/orders', orderData).subscribe(
        response => {
          alert('Commande envoyée avec succès !');
          this.closeOrderModal();
          form.resetForm();
        },
        error => {
          alert('Erreur lors de l\'envoi de la commande.');
          console.error('Error:', error);
        }
      );
    }
  }
}