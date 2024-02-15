
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import AboutData from './components/pages/AboutData.vue';
import HomeData from './components/pages/HomeData.vue';
import NotFound from './components/pages/NotFound.vue';

const routes = [
  {path:'/',component: HomeData },
  {path:'/about',component: AboutData},
  {path:'/notfound',component: NotFound }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
