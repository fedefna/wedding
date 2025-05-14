import { Injectable } from '@angular/core';
import { collection, addDoc, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class RsvpService {
  constructor(private firestore: Firestore) {}

  async saveResponse(response: {
    name: string;
    email: string;
    attending: boolean;
    message?: string;
  }) {
    try {
      const rsvpCollection = collection(this.firestore, 'rsvps');
      await addDoc(rsvpCollection, response);
      console.log('RSVP saved');
    } catch (error) {
      console.error('Error saving RSVP:', error);
      throw error;
    }
  }
}
