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
        <div class="order__img ">
            <ul class="flex flex-col gap-10" v-for="(item, index) in order.OrderArray" :key="index">
                <div class="flex order__item flex-col gap-1 ">
                    <img :src="item.imgUrl" alt="">
                    <li class="oreder__img-title w-52">{{ item.title }}
                    </li>
                    <li class="oreder__img-title">{{ item.price }} руб
                    </li>
                    <li class="oreder__img-title">{{ item.size }}US
                    </li>
                </div>
            </ul>
        </div>

        <div class="order__user mb-5 text-center mt-10">
            <p class="order__user-name">Покупатель: <span>{{ order.name }}</span></p>
            <p class="order__user-email">Email: <span>{{ order.email }}</span></p>
            <p class="order__user-number">Номер телефона: <span>{{ order.number }}</span> </p>
            <p class="order__user-date">Дата заказа: <span>{{ formatDate(order.date) }}</span> </p>
            <p>{{ order.totalPrice }}</p>
        </div>
    </div>
</template>

<style scoped>
.order__item {
    margin-right: 20px;
}


.order__img {
    display: flex;
}

span {
    font-style: italic;
}

img {
    height: 200px;
    width: 200px;
}

.order {
    border-bottom: 1px solid black;
}
</style>