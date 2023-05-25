import { createApp } from "vue";
import App from "./App.vue";
import "@fortawesome/fontawesome-free/css/all.css";
import LangFlag from "vue-lang-code-flags";

createApp(App).component("lang-flag", LangFlag).mount("#app");
