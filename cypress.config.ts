import { defineConfig } from "cypress";
import { plugin as cypressFirebasePlugin } from 'cypress-firebase';
import admin from 'firebase-admin';

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:4173",
    setupNodeEvents(on, config) {
      cypressFirebasePlugin(on, config, admin);
    }
  },
});
