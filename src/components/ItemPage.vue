<template>
    <div class="itemPage" v-if="itemCard">
        <div class="itemPage__img">
            <div class="itemPage__img-grid">
                <img :src="itemCard.imgUrl[0]" :alt="`Image`" class="itemPage__img-mainimg">
                <img v-for="(imageUrl, index) in itemCard.imgUrl" :key="index" :src="imageUrl" :alt="`Image ${index}`"
                    class="itemPage__img-lastimg">
            </div>
        </div>
        <div class="itemPage__text">
            <p class="itemPage__text-title text-3xl font-semibold">{{ itemCard.title }}</p>
            <p class="itemPage__text-pice text-xl"> {{ itemCard.price }} руб</p>
            <p class="itemPage__text-size text-xl">Размеры:
                <span class="size_span" @click="selectSize(size)" :style="{
                    color: selectedSize === size ? 'white' : 'grey',
                    backgroundColor: selectedSize === size ? 'black' : 'white',
                }" v-for="(size, index) in itemCard.size" :key="index">
                    {{ size }}
                </span>
            </p>

            <p class="itemPage__text-desc text-xl">Описание: <span>
                    наименование и товарный знак сформированы в информационных целях на
                    основе данных из открытых источников: с официального интернет-магазина за рубежом. Условие по
                    вознаграждению агента см в п. 2.3.4. Агентского договора.
                </span> </p>
            <button class="buy__btn" @click="AddToBasket"> В корзину </button>
        </div>

    </div>
    <div class="recomend">
        <p class="text-centr">Смотрите также:</p>
        <div class="recomend__Item flex justify-between pt-10 ">
            <div v-for="(item, index) in randomItems" :key="index" class="item_recomend">
                <CatalogItems :catalogItem="item" />
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'; // Импортируем useRoute
import CatalogItems from './Pages/Catalog/CatalogItems.vue';
const store = useStore();
const itemCard = computed(() => store.state.ItemCard);
const router = useRouter(); // Получаем текущий маршрут
router.push({ name: 'ItemPage', params: { id: itemCard.value.id } });
onMounted(() => {
    store.dispatch('updateRandomItems');
    if (itemCard.value.size) {
        selectedSize.value = itemCard.value.size[0];
    } else {
        console.log('Что то не так')
    }
});
//Рандомные товары снизу
const randomItems = computed(() => store.state.randomItems);
//В корзину
const AddToBasket = async () => {
    try {
        await axios.post('https://52229c9522e6c31a.mokky.dev/basket', {
            id: itemCard.value.id,
            title: itemCard.value.title,
            price: itemCard.value.price,
            imgUrl: itemCard.value.imgUrl,
            size: selectedSize.value,
        });
        await store.dispatch('fetchCartItems');
    } catch (error) {
        alert('Произошла ошибка при добавлении товара в корзину.');
    }
};
//Выбор размера
const selectedSize = ref(0);
const selectSize = (size) => {
    selectedSize.value = size;
};
</script>

<style scoped>
.item__recomened {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 1px;
    flex-grow: 1;
    flex-shrink: 100;
    justify-content: space-between;
    background-color: rgb(236 236 236);
    border-radius: 20px;
    padding: 20px 20px;

}

/* IMG */
.itemPage {
    margin-top: 20px;
    display: flex;
    gap: 10px;
}

.itemPage__img {
    width: 70%;
}

.itemPage__img-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
}

.itemPage__img-mainimg {
    grid-column: span 3;
    border: 1px solid black;
    width: 100%;
    height: 300px;
    /* Задаем фиксированную высоту */
    object-fit: cover;
    /* Сохраняем пропорции изображения */
}

.itemPage__img-lastimg {
    border: 1px solid black;
    width: 100%;
    height: 100px;
    /* Задаем фиксированную высоту для остальных изображений */
    object-fit: cover;
    /* Сохраняем пропорции изображения */
}

/* TEXT */
.itemPage__text {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
}

.size_span {
    padding: 2px 4px;
    border: 1px solid black;
    margin-left: 5px;
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    cursor: pointer;
    transition: 0.3s;
}

.size_span:hover {
    background-color: black;
    color: white;

}


.buy__btn {
    padding: 5px 9px;
    border: 1px solid rgb(65, 63, 63);
    border-radius: 10px;
    font-weight: bold;
    text-transform: uppercase;
    color: rgb(35, 37, 37);
    transition: 0.3s;
}

.buy__btn:hover {
    background-color: rgb(65, 63, 63);
    color: white;
    box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.685) inset;
}

.buy__btn:active {
    box-shadow: -5px -5px 5px -5px rgba(37, 37, 37, 0.6) inset;
}




.recomend {
    margin-top: 40px;
    border-top: 1px solid black;
}
</style>
