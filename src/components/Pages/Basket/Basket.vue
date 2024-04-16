<script setup>
import axios from 'axios';
import BasketItem from './BasketItem.vue'
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import Uinput from './Uinput.vue';

const store = useStore();
const isPaymentFormVisible = ref(false);

onMounted(() => {
  // Вызываем действие fetchCartItems после монтирования компонента
  store.dispatch('fetchCartItems');
  // Добавляем обработчик события для кнопки "Оплатить"
})
const paymentButton = () => {
  if (store.state.cartItems.length > 0) {
    isPaymentFormVisible.value = true
  }
  else {
    isPaymentFormVisible.value = false
  }
}
const closePaymentForm = () => {
  isPaymentFormVisible.value = false;
};
const Items = computed(() => store.state.cartItems);

const removeFromBasket = async (itemId) => {
  try {
    await axios.delete(`https://52229c9522e6c31a.mokky.dev/basket/${itemId}`)
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


//Проверка пользователя для оплаты товара
</script>

<template>
  <div class="basket">
    <div class="basketleft">
      <h2>Корзина</h2>
      <p v-if="Items.length === 0" class="text-red-400 text-2xl tracking-wide uppercase ">Ваша корзина пуста</p>
      <BasketItem v-else v-for="item in Items" :key="item.id" :title="item.title" :price="item.price" :size="item.size"
        :imgUrl="item.imgUrl" :id="item.id" :remove="removeFromBasket" />
    </div>
    <div class="basketright">
      <div class="textcontent">
        <h3>Оформление заказа</h3>
        <p>Всего позиций : {{ Items.length }}</p>
        <p>Итого: {{ totalPrice }} руб</p>
        <button @click="paymentButton" :style="{
          opacity: Items.length > 0 ? '1' : '0.5',
          cursor: Items.length === 0 ? 'default' : 'pointer',
        }">
          Оплатить
        </button>
      </div>
    </div>
    <Uinput v-if="isPaymentFormVisible" :closeForm="closePaymentForm" :OrderArray="Items" :TotalPrice="totalPrice"
      :Items="Items" />
    <!-- Добавлено условное отображение -->
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
  position: relative;
  z-index: 1;
  min-height: 70vh;
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

h2 {
  font-size: 29px;
  font-weight: 700;
  margin-bottom: 30px;
}


p {
  font-weight: 700;
}

@media (max-width: 760px) {
  .basket {
    flex-direction: column;
    align-items: center;
  }

  .basketleft,
  .basketright {
    width: 100%;
  }
}
</style>