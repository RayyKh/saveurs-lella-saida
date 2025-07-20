import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueuil/accueuil.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SweetCategoryComponent } from './sweet-category/sweet-category.component';
import { SaltyCategoryComponent } from './salty-category/salty-category.component';
import { GateauCategoryComponent } from './gateau-category/gateau-category.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    FooterComponent,
    NavbarComponent,
    SweetCategoryComponent,
    SaltyCategoryComponent,
    GateauCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }