// store.js
import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import axios from 'axios';
export default createStore({
  plugins: [createPersistedState()],
  state: {
    items: [],//каталог
    cartItems: [],//получение товаров из корзины
    ItemCard: [],//для страницы товара
    randomItems: [], // для случайных товаров
    isItemAdded: false,
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
      state.ItemCard = item;
    },
    setRandomItems(state, randomItems) {
      state.randomItems = randomItems;
    },
    setItemAdded(state, value) {
      state.isItemAdded = value;
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
    // Действие для удаление товара из корзины
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
    //для itemPage избежать багов при обновлении бразуера и сохранении товара в state
    addItemCard({ commit }, item) {
      commit('setItemCard', item);

    },
    // Действие для рандомных товаров 
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
    // Функция добавления товара в корзину на бэк
    async addToBasket({ commit }, item) {
      try {
        await axios.post('https://52229c9522e6c31a.mokky.dev/basket', item);
        // После успешного добавления товара в корзину, обновите список товаров в корзине
        await this.dispatch('fetchCartItems');
        commit('setItemAdded', true); // Установите флаг, что товар был добавлен
        setTimeout(() => {
          commit('setItemAdded', false); // Сбросьте флаг через некоторое время
        }, 2000);
      } catch (error) {
        console.error('Ошибка при добавлении товара в корзину:', error);
        commit('setItemAdded', false); // Сбросьте флаг в случае ошибки
      }
    },

  }
});

