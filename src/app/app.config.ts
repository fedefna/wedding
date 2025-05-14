import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideZoneChangeDetection } from '@angular/core';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { firebaseConfig } from '../environments/firebase'; // asegurate que este archivo exporta el objeto firebaseConfig

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),

    // ✅ Esta es la línea clave: usar `importProvidersFrom` para resolver el tipo
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideFirestore(() => getFirestore())
    )
  ]
};
