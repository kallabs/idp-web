import './assets/base.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub, faFacebook, faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";

library.add(faGithub, faFacebook, faGoogle, faLinkedin);

import App from './App.vue'
import router from './router'

const app = createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon);

app.use(createPinia())
app.use(router)

app.mount('#app')
