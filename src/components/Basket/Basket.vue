<script setup>
import axios from 'axios';

import BasketItem from './BasketItem.vue'
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import Item from '../Item.vue';

const store = useStore();

// Получаем данные о корзине из Vuex store

onMounted(() => {
  // Вызываем действие fetchCartItems после монтирования компонента
  store.dispatch('fetchCartItems');
});

const Items = computed(() => store.state.cartItems);

const removeFromBasket = async (itemId) => {
  try {
    const response = await axios.delete(`https://52229c9522e6c31a.mokky.dev/basket/${itemId}`)
    await store.dispatch('fetchCartItems');
    await store.dispatch('fetchItems');
  } catch (error) {
    console.error('Ошибка при удалении товара из корзины:', error)
  }
}

// Экспортируем функцию, чтобы она была доступна в шаблоне
defineExpose({ removeFromBasket });

// Вычисляем общую стоимость товаров в корзине
const totalPrice = computed(() => {
  return Items.value.reduce((sum, item) => sum + item.price, 0)
})
</script>

<template>
  <div class="basket">
    <div class="basketleft">
      <h3>Корзина</h3>
      <BasketItem v-for="item in Items" :key="item.id" :title="item.title" :price="item.price" :size="item.size"
        :imgUrl="item.imgUrl" :id="item.id" :remove="removeFromBasket" />
    </div>
    <div class="basketright">
      <div class="textcontent">
        <h3>Оформление заказа</h3>

        <p>Всего позиций : {{ Items.length }}</p>
        <p>Итого: {{ totalPrice }} руб</p>
        <button>Оплатить</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  background-color: rgb(14, 225, 74);
  border: none;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 900;
  margin-bottom: 10px;
  color: white;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  cursor: pointer;
}

.basket {
  display: flex;
  margin-top: 5px;
  text-align: center;
  gap: 10px;
}

.basketleft {
  width: 70%;
  background-color: rgb(236 236 236);
  border-radius: 20px;
}

.basketright {
  width: 30%;
  background-color: rgb(236 236 236);
  border-radius: 20px;
}

.textcontent {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}





@media (max-width: 760px) {
  .basket{
    flex-direction: column;
    align-items: center;
  }
  .basketleft, .basketright{
    width: 100%;
  }
}
</style>