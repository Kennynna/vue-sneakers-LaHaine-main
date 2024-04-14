<script setup>
import axios from 'axios';
import { ref } from 'vue';

const data = ref({
    category: "",
    id: "",
    title: "",
    price: "",
    size: [],
    imgUrl: [],
});
// Функция для генерации уникального ID на основе текущей даты и времени
const generateId = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // Месяцы начинаются с 0
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    // Форматируем дату и время в строку без пробелов, точек и двоеточий
    const formattedDate = `${year}${month}${day}${hours}${minutes}${seconds}`;
    return formattedDate;
};
//Добавления в объект значений
data.value.id = Number(generateId());

const inputTitle = (e) => {
    data.value.title = e.target.value;
}
const inputCategory = (e) => {
    data.value.category = e.target.value;
}
const inputPrice = (e) => {
    data.value.price = Number(e.target.value);
}
const inputSize = (e) => {
    data.value.size = e.target.value.split(/,|\s/).map(Number);
}
const inputImgUrl = (index, e) => {
    // Используем индекс для обновления соответствующего элемента массива
    data.value.imgUrl[index] = e.target.value;
}

const warnin = ref('')
const isFormValid = () => {
    // Проверяем, заполнены ли все поля
    if (!data.value.category || !data.value.title || !data.value.price || data.value.size.length === 0 || data.value.imgUrl.length === 0) {
        warnin.value='Пожалуйста, заполните все поля правильно';
        return false;
    }
    if (data.value.category !== 'sneakers' || data.value.category !== 'clothes'){
        warnin.value = 'Пожалуйста, заполните полe категории правильно правильно';
        return false;
    }
    return true;
};
const addOrderToItemss = async () => {
    if (!isFormValid()) {
        return;
    }
    try {

        await axios.post('https://52229c9522e6c31a.mokky.dev/items', data.value);
        alert('Товар успешно добавлен')

    }
    catch {
        alert('Не удалось отправить')
    }

    // Здесь вы можете добавить логику для отправки данных на сервер или сохранения в состояние приложения
};
</script>

<template>
    <div class="formInput flex flex-col items-center mt-40">
        <input @input="inputCategory" type='text' placeholder="Категория">
        <input @input="inputTitle" type="text" placeholder="Название">
        <input @input="inputPrice" type="text" placeholder="цена">
        <input @input="inputSize" type="text" placeholder="размеры (например 4.5, 5, 6.5)">
        <input @input="(e) => inputImgUrl(0, e)" type="text" placeholder="ссылка на фото #1">
        <input @input="(e) => inputImgUrl(1, e)" type="text" placeholder="ссылка на фото #2">
        <input @input="(e) => inputImgUrl(2, e)" type="text" placeholder="ссылка на фото #3">
        <div class="newPosition">
            <div class="imgblock flex" v-if="data.imgUrl.length >= 1">
                <img :src="data.imgUrl[0]" alt="">
                <img :src="data.imgUrl[1]" alt="">
                <img :src="data.imgUrl[2]" alt="">
            </div>
            <p class="title" v-if="data.category"> Категория: {{ data.category }}</p>
            <p>Подсказки для категорий: Одежда - clothes, Кроссовки - sneakers</p>
            <p class="title" v-if="data.title"> Название: {{ data.title }}</p>
            <p class=" prise" v-if="data.price">Цена: {{ data.price }}</p>
            <p class="size" v-if="data.size.length > 1">Размеры: {{ data.size }}</p>
            <p id="Warn"></p>
        </div>
        <button @click="addOrderToItemss">Добавить позицию</button>
        <p class="color red">{{ warnin }}</p>
    </div>
</template>

<style scoped>
input {
    border: 1px solid black;
    width: 400px;
}

button {
    background-color: aquamarine;
    padding: 5px 10px;
}

.formInput {
    gap: 10px;
}

img {
    width: 200px;
    height: 200px;
}
</style>