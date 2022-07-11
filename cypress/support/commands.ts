/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore';
import { attachCustomCommands } from 'cypress-firebase';

const fbConfig = {
    apiKey: "AIzaSyC0AKX8ZWZ0Ur1iA6ZMMbGUP8ZDIK2R99Y",
    authDomain: "firebasics-77c7d.firebaseapp.com",
    databaseURL: "https://firebasics-77c7d-default-rtdb.firebaseio.com",
    projectId: "firebasics-77c7d",
    storageBucket: "firebasics-77c7d.appspot.com",
    messagingSenderId: "405821042005",
    appId: "1:405821042005:web:09d4d15b53ed2674df13dc",
    measurementId: "G-XG24DQMVWY"
};

firebase.initializeApp(fbConfig);

attachCustomCommands({ Cypress, cy, firebase });