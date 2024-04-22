
<template>
      <div class="content flex-column  flex-wrap">
        <NewOrdersItem v-for="(order, index) in OrdersUser" :key="index" :order="order" /> 
      </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import NewOrdersItem from './NewOrdersItem.vue';

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
.content{
  background-color: var(--bacground);
}
h1 {
  font-size: 36px;
  text-align: center;
  font-weight: bold;
}
</style>