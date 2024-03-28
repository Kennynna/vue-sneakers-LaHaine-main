
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
import AuthUser from './components/Pages/Auth/AuthUser.vue';
import { createPinia } from 'pinia'
//FireBase
import { initializeApp } from "firebase/app";


//pinia
const pinia = createPinia()

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
        { path: '/item/:id', name: 'ItemPage', component: ItemPage, props: true },
        { path: '/auth', name: 'Auth', component: AuthUser },
    ]
});

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC4ILo7geI-DDFaueUBGjsCMbw9daUGfCs",
    authDomain: "la-haine.firebaseapp.com",
    projectId: "la-haine",
    storageBucket: "la-haine.appspot.com",
    messagingSenderId: "117377718413",
    appId: "1:117377718413:web:793c867f9bb82291852ac4",
    measurementId: "G-2H0QFRLJNV"
};

initializeApp(firebaseConfig);

createApp(App)
    .use(store)
    .use(router)
    .use(pinia)
    .mount('#app')