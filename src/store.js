// store.js
import { createStore } from 'vuex';
import axios from 'axios';
export default createStore({
  state: {
    items: [],//каталог
    cartItems: [],//корзины
    ItemCard: [],//для страницы товара
    randomItems: [], // для случайных товаров
  },
  mutations: {
    setCartItems(state, items) {
      state.cartItems = items;
      state.cartItemCount = items.length;
    },
    setItems(state, items) {
      state.items = items;
    },
    setItemCard(state, item) {
      state.ItemCard = item
    },
    setRandomItems(state, randomItems) {
      state.randomItems = randomItems;
    },
    async fetchItemById({ commit }, itemId) {
      try {
        const { data } = await axios.get(`https://52229c9522e6c31a.mokky.dev/items/${itemId}`);
        commit('setItemCard', data);
      } catch (error) {
        console.error('Ошибка запроса:', error);
      }
    },
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
    // Действие для очистки корзины
    async clearCart({ commit }) {
      try {
        await axios.delete(`https://52229c9522e6c31a.mokky.dev/basket/`);
        const { data } = await axios.get('https://52229c9522e6c31a.mokky.dev/basket');
        commit('setCartItems', data);
      } catch (error) {
        console.error('Ошибка при попытке очистить корзину:', error);
        alert('Не удалось очистить корзину. Подробная ошибка: ' + error.message);
      }
    },

    addItemCard({ commit }, item) {
      commit('setItemCard', item);
      console.log(item)
    },
    updateRandomItems({ commit, state }) {
      const randomIndices = (n, max) => {
        const set = new Set();
        while (set.size < n) {
          set.add(Math.floor(Math.random() * max));
        }
        return Array.from(set);
      };

      const indices = randomIndices(3, state.items.length);
      const randomItems = indices.map(index => state.items[index]);
      commit('setRandomItems', randomItems);
    },
    async fetchItemById({ commit }, itemId) {
      try {
        const { data } = await axios.get(`https://52229c9522e6c31a.mokky.dev/items/${itemId}`);
        commit('setItemCard', data);
      } catch (error) {
        console.error('Ошибка запроса:', error);
      }
    },
  }
});

