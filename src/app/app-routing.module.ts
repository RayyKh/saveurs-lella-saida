import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueuil/accueuil.component';
import { SweetCategoryComponent } from './sweet-category/sweet-category.component';
import { SaltyCategoryComponent } from './salty-category/salty-category.component';
import { GateauCategoryComponent } from './gateau-category/gateau-category.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'sweet-category', component: SweetCategoryComponent },
  { path: 'salty-category', component: SaltyCategoryComponent },
  { path: 'gateau-category', component: GateauCategoryComponent },
  { path: 'product/:category/:subCategory', component: ProductDetailComponent },
  { path: 'product/:category', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product/cart-order', component: ProductDetailComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Réinitialise la position de défilement à (0, 0)
    anchorScrolling: 'enabled', // Gère les ancrages si nécessaire
    initialNavigation: 'enabledBlocking' // Assure une navigation initiale fluide
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }