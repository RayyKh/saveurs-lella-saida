import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'patisserieLellaSaida1';
  isLoading = true;
  isMuted: boolean[] = [true, true, true];
  isCategoryRoute = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isCategoryRoute = event.urlAfterRedirects === '/sweet-category' || 
                              event.urlAfterRedirects === '/salty-category' || 
                              event.urlAfterRedirects === '/gateau-category';
        console.log('Current route:', event.urlAfterRedirects, 'isCategoryRoute:', this.isCategoryRoute); // Débogage
      }
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 100);
  }

  // Autres méthodes (scrollToSection, toggleMute, etc.) restent inchangées


  public scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  public toggleMute(videoIndex: number) {
    const video = document.getElementById(`video-${videoIndex}`) as HTMLVideoElement;
    if (video) {
      video.muted = !video.muted;
      this.isMuted[videoIndex] = video.muted;
    }
  }

  public openCartModal() {
    const modal = document.getElementById('cartModal');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
      modal.setAttribute('aria-hidden', 'false');
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
