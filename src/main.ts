import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

//import './assets/base.css';

import { initializeApp } from 'firebase/app';
import { onAuthStateChanged } from "@firebase/auth";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC0AKX8ZWZ0Ur1iA6ZMMbGUP8ZDIK2R99Y",
  authDomain: "firebasics-77c7d.firebaseapp.com",
  databaseURL: "https://firebasics-77c7d-default-rtdb.firebaseio.com",
  projectId: "firebasics-77c7d",
  storageBucket: "firebasics-77c7d.appspot.com",
  messagingSenderId: "405821042005",
  appId: "1:405821042005:web:09d4d15b53ed2674df13dc",
  measurementId: "G-XG24DQMVWY"
};

initializeApp(firebaseConfig);
let app;
const auth = getAuth();
app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");