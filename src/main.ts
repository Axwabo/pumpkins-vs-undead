import { createApp } from "vue"
import "./style.css";
import "./undead.css";
import "./pumpkins.css";
import App from "./App.vue";
import { createPinia } from "pinia";

createApp(App).use(createPinia()).mount("#app");
