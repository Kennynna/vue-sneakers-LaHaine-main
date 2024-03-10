// store.js
import { createStore } from 'vuex';
import axios from 'axios';
export default createStore({
 state: {
   items: [],
    cartItems: [],
    cartItemCount: 0
    
 },
 mutations: {
    setCartItems(state, items) {
      state.cartItems = items;
      state.cartItemCount = items.length;
    },
    setItems(state, items) {
      state.items = items;
    }
 },
 actions: {
    //Получение всех товаров
    async fetchItems({ commit }) {
       try {
         const { data } = await axios.get('https://52229c9522e6c31a.mokky.dev/items');
         commit('setItems', data);
         
       } catch (error) {
         console.error('Ошибка запроса:', error);
       }
     },
     //Получение  товаров из корзины пользователя
    async fetchCartItems({ commit }) {
      try {
        const { data } = await axios.get('https://52229c9522e6c31a.mokky.dev/basket');
        commit('setCartItems', data);
        
      } catch (error) {
         console.error('Ошибка запроса:', error);
      }
 },
}
});

