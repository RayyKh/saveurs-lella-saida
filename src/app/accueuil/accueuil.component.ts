import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueuil.component.html', // Correction du nom de fichier
  styleUrls: ['./accueuil.component.scss']
})
export class AccueilComponent implements OnInit {
  isLoading = true;
  isMuted: boolean[] = [true, true, true]; // Track mute state for each video (non utilisé maintenant)

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 100);
  }

  public toggleMute(videoIndex: number) {
    // Non utilisé après suppression des vidéos
  }

  public closeCartModal() {
    const modal = document.getElementById('cartModal');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
    }
  }

  public openSweetCategory() {
    window.open(`${window.location.origin}/sweet-category`, '_blank');
  }

  public openSaltyCategory() {
    window.open(`${window.location.origin}/salty-category`, '_blank');
  }

  public openGateauCategory() {
    window.open(`${window.location.origin}/gateau-category`, '_blank');
  }

  public viewProductDetails(productId: string) {
    // Placeholder pour ouvrir une page de détails ou une modale
    console.log(`Voir détails du produit: ${productId}`);
    // Vous pouvez ajouter une navigation vers une page de détails ici, par exemple:
    // this.router.navigate([`/product-details/${productId}`]);
  }
}