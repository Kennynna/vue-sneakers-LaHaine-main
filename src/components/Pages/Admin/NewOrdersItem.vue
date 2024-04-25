<script setup>
import { ref } from 'vue'
import axios from 'axios';
const props = defineProps({
    order: Object, // Определите пропс для передачи данных о заказе

});


// Функция для форматирования даты
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return date.toLocaleString('ru-RU', options);
};
const isChecked = ref(false)
isChecked.value = props.order.checked;
const onChecked = async () => {
    if (isChecked.value) {
        return;
    } else {
        try {
            await axios.patch(`https://52229c9522e6c31a.mokky.dev/orders/${props.order.id}`, {
                checked: true
            })
            isChecked.value = true
        }
        catch {
            alert('Не удалось')
        }
    }
}
</script>

<!-- :style="{ backgroundColor: order.checked ? 'black' : 'grey' }" -->
<template>
    <div class="order flex-cloum items-center ">
        <div v-if="!isChecked" @click="onChecked" class="dark">
            <p class="dark-text">Не проверено</p>
        </div>
        <div class="order__img">
            <ul class="flex flex-col gap-10" v-for="(item, index) in order.OrderArray" :key="index">
                <div class="flex order__item  gap-1 ">
                    <img :src="item.imgUrl[0]" alt="">
                    <ul>
                        <li class="oreder__img-title w-52">{{ item.title }}
                        </li>
                        <li class="oreder__img-title">{{ item.price }} руб
                        </li>
                        <li class="oreder__img-title">{{ item.size }}
                        </li>
                    </ul>
                </div>
            </ul>
        </div>

        <div class="order__user mb-5 text-center mt-10">
            <h1>С учетом скидки: <span class="order__user-price">{{ order.totalPrice }}</span></h1>
            <p class="order__user-name">Покупатель: <span>{{ order.name }}</span></p>
            <p class="order__user-email">Email: <span>{{ order.email }}</span></p>
            <p class="order__user-number">Номер телефона: <span>{{ order.number }}</span> </p>
            <p class="order__user-date">Дата заказа: <span>{{ formatDate(order.date) }}</span> </p>
        </div>
    </div>
</template>

<style scoped>
.order__user-price{
    color: red;
    font-weight: 800;
}
.dark-text {
    margin-left: 50%;
    font-size: 40px;
    color: red;
}

.dark {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.258);
    transition: 0.3s;
}

.dark:hover {
    background-color: rgba(0, 0, 0, 0.097);
}

.order__item {
    margin-right: 5px;
}


.order__img {
    display: flex;
}

span {
    font-style: italic;
}

img {
    height: 100px;
    width: 100px;
}

.order {
    border-bottom: 1px solid black;
    overflow-y: scroll;
    position: relative;
}
.order__img{
        flex-wrap: wrap;
        gap: 10px;
}
</style>