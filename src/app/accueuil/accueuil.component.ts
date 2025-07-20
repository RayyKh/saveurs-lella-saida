// accueil.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueuil.component.html',
  styleUrls: ['./accueuil.component.scss']
})
export class AccueilComponent implements OnInit {
  isLoading = true;
  isMuted: boolean[] = [true, true, true]; // Track mute state for each video

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 100);
  }

  public toggleMute(videoIndex: number) {
    const video = document.getElementById(`video-${videoIndex}`) as HTMLVideoElement;
    if (video) {
      video.muted = !video.muted;
      this.isMuted[videoIndex] = video.muted;
    }
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
}