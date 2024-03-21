
import store from './store';
import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import Home from '/src/components/Pages/Home/Home.vue';
import About from '/src/components/Pages/About.vue';
import Catalog from '/src/components/Pages/Catalog/Catalog.vue'
import App from './App.vue'
import Basket from './components/Pages/Basket/Basket.vue';
import AdminPage from './components/Pages/Admin/AdminPage.vue';
import NewOrders from './components/Pages/Admin/NewOrders.vue';
import AddPosition from './components/Pages/Admin/AddPosition.vue';
import ViewAllProducts from './components/Pages/Admin/ViewAllProducts.vue'
import ItemPage from './components/ItemPage.vue';
import './index.css'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/about', name: 'About', component: About },
        { path: '/catalog', name: 'Catalog', component: Catalog },
        { path: '/basket', name: 'Basket', component: Basket },
        {
            path: '/admin',
            component: AdminPage,
            children: [
                { path: 'new-orders', component: NewOrders },
                { path: 'add-position', component: AddPosition },
                { path: 'view-all-products', component: ViewAllProducts },
                // другие дочерние маршруты...
            ]
        },
        { path: '/item/:id', name: 'ItemPage', component: ItemPage, props: true }, // Новый маршрут для страницы товара
    ]
});







createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
