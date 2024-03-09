import { createStore } from 'vuex';

export default createStore({
 state: {
    cartItems: [],
    cartItemCount: 0 // Добавляем новое состояние для хранения количества элементов в корзине
 },
 mutations: {
    addToCart(state, item) {
      state.cartItems.push(item);
      state.cartItemCount = state.cartItems.length; // Обновляем количество элементов в корзине
    },
    removeFromCart(state, itemId) {
      state.cartItems = state.cartItems.filter(item => item.id !== itemId);
      state.cartItemCount = state.cartItems.length; // Обновляем количество элементов в корзине
    }
 },
 getters: {
    cartItemCount: state => state.cartItemCount // Геттер для получения количества элементов в корзине
 }
});