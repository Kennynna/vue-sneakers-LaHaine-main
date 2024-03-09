<script setup>
import BasketItem from './BasketItem.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { computed} from 'vue';

const Items = ref([]);
onMounted(async () => {
  try {
    const { data } = await axios.get('https://52229c9522e6c31a.mokky.dev/basket');
    Items.value = data;
  } catch (error) {
    alert('Ошибка запроса');
  }
});
// Отслеживаем изменения в Items и обновляем счетчик в Vuex store


// Метод для удаления товара из корзины
const removeFromBasket = async (itemId) => {
  console.log(itemId)
  try {
    // Отправляем запрос на сервер для удаления товара
    const response = await axios.delete(`https://52229c9522e6c31a.mokky.dev/basket/${itemId}`)
    // Проверяем, что сервер вернул успешный ответ
    if (response.status === 200) {
      // Находим индекс товара по id
      const index = Items.value.findIndex((item) => item.id === itemId)
      // Если товар найден, удаляем его из массива
      if (index !== -1) {
        Items.value.splice(index, 1)
      }
    } else {
      console.error('Ошибка при удалении товара из корзины:', response.data)
    }
  } catch (error) {
    console.error('Ошибка при удалении товара из корзины:', error)
  }
}

// Экспортируем функцию, чтобы она была доступна в шаблоне
const totalPrice = computed(() => {
  return Items.value.reduce((sum, item) => sum + item.price, 0)
})
defineExpose({ removeFromBasket });
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
</style>