import { createApp } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import $ from 'jquery';
import App from './App.vue';
import store from './store';
import router from './router';

router.mode = 'hash';

const app = createApp(App);
app.config.globalProperties.$ = $;
app.use(store).use(router).mount('#app');
