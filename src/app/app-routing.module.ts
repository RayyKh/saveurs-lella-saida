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
  { path: 'product/cart-order', component: ProductDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }