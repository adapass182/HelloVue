import { createApp } from "vue";
import { createPinia } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faMinus, faRotateRight } from "@fortawesome/free-solid-svg-icons";

library.add(faCheck, faMinus, faTrashCan, faRotateRight);

import App from "./App.vue";

import "./assets/main.css";

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);

app.use(createPinia());

app.mount("#app");
