import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Knob from "primevue/knob";
import Calendar from "primevue/calendar";
import Card from "primevue/card";
import AutoComplete from "primevue/autocomplete";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import "./assets/main.css";
const app = createApp(App);

app.use(router);
app.use(PrimeVue);
app.component("Knob", Knob);
app.component("Calendar", Calendar);
app.component("Card", Card);
app.component("AutoComplete", AutoComplete);

app.mount("#app");
