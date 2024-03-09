
import store from './store';
import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import Home from '/src/components/Home.vue';
import About from '/src/components/About.vue';
import Catalog from '/src/components/Catalog/Catalog.vue'
import App from './App.vue'
import Basket from './components/Basket/Basket.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    {path: '/catalog', name: 'Catalog', component: Catalog},
    {path: '/basket', name: 'Basket', component: Basket} 
    ]
})







createApp(App)
.use(store) 
.use(router)
.mount('#app')
