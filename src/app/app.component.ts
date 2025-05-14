import { Component } from '@angular/core';
import { WeddingPageComponent } from './wedding-page/wedding-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WeddingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wedding-invitation';
}
