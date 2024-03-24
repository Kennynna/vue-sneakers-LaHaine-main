<script setup>

const props = defineProps({
 order: Object, // Определите пропс для передачи данных о заказе

});


// Функция для форматирования даты
const formatDate = (dateString) => {
 const date = new Date(dateString);
 const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
 return date.toLocaleString('ru-RU', options);
};
</script>


<template>
    <div class="order flex-cloum items-center ">
        <div class="order__title"> </div>
        <div class="order__img">
            <img v-for="(item, index) in order.OrderArray" :key="index" :src="item.imgUrl" alt="">
            <p class="oreder__img-title" v-for="(item, index) in order.OrderArray" :key="index">{{ item.title }}</p>
        </div>

        <div class="order__user">
            <p class="order__user-name">Покупатель: <span>{{ order.name }}</span></p>
            <p class="order__user-email">Email: <span>{{ order.email }}</span></p>
            <p class="order__user-number">Номер телефона: <span>{{ order.number }}</span> </p>
            <p class="order__user-date">Дата заказа: <span>{{ formatDate(order.date) }}</span> </p>
            <p>{{ order.totalPrice }}</p>
        </div>
    </div>
</template>

<style scoped>
.order__img{
    display: flex;
}
span {
    font-style: italic;
}

img {
    height: 100px;
    width: 100px;
}
.order{
    border-bottom: 1px solid black;
}
</style>