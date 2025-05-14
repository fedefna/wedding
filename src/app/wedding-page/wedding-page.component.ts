import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RsvpFormComponent } from '../rsvp-form/rsvp-form.component';

@Component({
  selector: 'app-wedding-page',
  standalone: true,
  imports: [CommonModule, RsvpFormComponent],
  templateUrl: './wedding-page.component.html',
  styleUrls: ['./wedding-page.component.css'],
})
export class WeddingPageComponent {
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  constructor() {
    this.startCountdown();
  }

  startCountdown() {
    const weddingDate = new Date('2025-11-21T18:00:00').getTime();
    setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = weddingDate - now;
      this.days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    }, 1000);
  }
}
