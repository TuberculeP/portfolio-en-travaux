import { createApp } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import $ from 'jquery';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);
app.config.globalProperties.$ = $;
app.use(store).use(router).mount('#app');
