<template>
  <div class="admin">
    <h1 class="">Панель админа</h1>
    <div class="nav list-none flex justify-between p- subpixel-antialiased font-bold">
      <li>
        <router-link to="/admin/new-orders">Новые заказы <span class="red text-red-600 font-black">
            +1 надо доделать</span></router-link>
      </li>
      <li>
        <router-link to="/admin/add-position">Добавить позицию</router-link>
      </li>
      <li>
        <router-link to="/admin/view-all-products">Посмотреть все товары</router-link>
      </li>

    </div>
    <router-view>
    </router-view>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';


let OrdersUser = ref([]);

const fetchOrders = async () => {
  try {
    const response = await axios.get('https://52229c9522e6c31a.mokky.dev/orders');
    OrdersUser.value = response.data;
  } catch {
    alert('Не получилось получить данные о заказе пользователя');
  }
};

onMounted(fetchOrders);
</script>

<style scoped>
.admin{
  min-height: 70vh;
}
h1 {
  font-size: 36px;
  text-align: center;
  font-weight: bold;
}

li {
  padding: 5px 10px;
  border-radius: 10px;
  background-color: black;
  color: white
}
</style>