// src/app/components/rsvp-form/rsvp-form.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RsvpService } from '../services/rsvp.service';

@Component({
  selector: 'app-rsvp-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rsvp-form.component.html',
  styleUrls: ['./rsvp-form.component.css']
})
export class RsvpFormComponent {
  name = '';
  email = '';
  attending = true;
  message = '';
  submitted = false;
  error = '';

  showForm = false;

  constructor(private rsvpService: RsvpService) {}

  toggleForm() {
    this.showForm = !this.showForm;
  }

  async submitForm() {
    this.error = '';
    if (!this.name || !this.email) {
      this.error = 'Por favor completá nombre y correo';
      return;
    }

    try {
      await this.rsvpService.saveResponse({
        name: this.name,
        email: this.email,
        attending: this.attending,
        message: this.message
      });
      this.submitted = true;
    } catch (err) {
      this.error = 'Error al enviar la confirmación. Intentá nuevamente más tarde.';
    }
  }
}
