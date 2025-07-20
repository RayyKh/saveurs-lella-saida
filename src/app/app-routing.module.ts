import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueuil/accueuil.component';
import { SweetCategoryComponent } from './sweet-category/sweet-category.component';
import { SaltyCategoryComponent } from './salty-category/salty-category.component';
import { GateauCategoryComponent } from './gateau-category/gateau-category.component';

const routes: Routes = [
  { path: '', component: AccueilComponent }, // Page d'accueil par défaut
  { path: 'sweet-category', component: SweetCategoryComponent },
  { path: 'salty-category', component: SaltyCategoryComponent },
  { path: 'gateau-category', component: GateauCategoryComponent },
  { path: '**', redirectTo: '' } // Redirige les routes non trouvées vers l'accueil
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }