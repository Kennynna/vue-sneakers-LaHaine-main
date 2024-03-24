<script setup>
import axios from 'axios';
import { ref } from 'vue';

const data = ref({
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
data.value.id = Number(generateId());
const inputTitle = (e) => {
    data.value.title = e.target.value;

}

const inputPrice = (e) => {
    data.value.price = Number(e.target.value);

}

const inputSize = (e) => {
    // Предполагается, что размеры вводятся через разные поля, поэтому добавляем новый размер в массив
    data.value.size = e.target.value.split(/,|\s/).map(Number);

}

const inputImgUrl = (index, e) => {
    // Используем индекс для обновления соответствующего элемента массива
    data.value.imgUrl[index] = e.target.value;

}

const addOrderToItemss = async () => {
    try{
        await axios.post('https://52229c9522e6c31a.mokky.dev/items', data.value);
        alert('Успешно добавили')
    }   
    catch{
        alert('Не удалось отправить')
    }

    // Здесь вы можете добавить логику для отправки данных на сервер или сохранения в состояние приложения
};
</script>

<template>
    <div class="formInput flex flex-col items-center mt-40">
        <input @input="inputTitle" type="text" placeholder="Название">
        <input @input="inputPrice" type="text" placeholder="цена">
        <input @input="inputSize" type="text" placeholder="размеры (например, 4.5, 5, 6.5)">
        <input @input="(e) => inputImgUrl(0, e)" type="text" placeholder="ссылка на фото #1">
        <input @input="(e) => inputImgUrl(1, e)" type="text" placeholder="ссылка на фото #2">
        <input @input="(e) => inputImgUrl(2, e)" type="text" placeholder="ссылка на фото #3">
        <button @click="addOrderToItemss">Добавить позицию</button>
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
</style>