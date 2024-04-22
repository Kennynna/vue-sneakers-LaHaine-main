<template>
  <h1>Панель админа</h1>
  <div class="admin flex gap-10">
    <div class="nav list-none flex font-bold">
      <ul class="admin-navlist">
        <li>
          <router-link to="/admin/new-orders">Новые заказы 
          <span class="red text-red-600 font-black">
          {{ uncheckedOrdersCount }}
            
          </span></router-link>
        </li>
        <li>Все заказы</li>
        <li>
          <router-link to="/admin/add-position">Добавить позицию</router-link>
        </li>
        <li>
          <router-link to="/admin/view-all-products">Посмотреть все товары</router-link>
        </li>
        <li>Статистика</li>
      </ul>
    </div>

    <div class="admin-content">
      <router-view>
      </router-view>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted,computed } from 'vue';
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


const uncheckedOrdersCount = computed(() => {
  return OrdersUser.value.filter(order => !order.checked).length;
});
</script>

<style scoped>
.admin-content {
  width: 100%;
}

.admin-navlist>li {
  border-bottom: 1px solid rgb(0, 0, 0);
  font-size: clamp(0.75rem, 0.659rem + 0.45vw, 1rem);
  cursor: pointer;
}

.admin-navlist>li:hover{
  background-color: black;
  color: white;
  border-bottom: 1px solid rgb(255, 253, 253);
}

.admin-navlist {
  background-color: var(--bacground);
  height: 70vh;
}

.nav {
  flex-direction: column;
}

h1 {
  font-size: 36px;
  text-align: center;
  font-weight: bold;
}

li {
  padding: 5px 10px;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0)
}
</style>