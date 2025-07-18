import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'patisserieLellaSaida1';
  isLoading = true;
  isMuted: boolean[] = [true, true, true]; // Track mute state for each video

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 100);
  }

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
} 