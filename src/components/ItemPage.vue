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
            <p class="itemPage__text-size text-xl">Размеры: <span class="size_span"
                    v-for="(size, index) in itemCard.size" :key="index">{{ size }}</span></p>
            <p class="itemPage__text-desc text-xl">Описание: <span>
                    наименование и товарный знак сформированы в информационных целях на
                    основе данных из открытых источников: с официального интернет-магазина за рубежом. Условие по
                    вознаграждению агента см в п. 2.3.4. Агентского договора.
                </span> </p>
            <button class="buy__btn"> В корзину </button>
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
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute , useRouter } from 'vue-router'; // Импортируем useRoute

import CatalogItems from './Pages/Catalog/CatalogItems.vue';

const store = useStore();
const route = useRoute(); // Получаем текущий маршрут
const router = useRouter(); // Получаем текущий маршрут
const itemId = computed(() => route.params.id); // Получаем id товара из параметров маршрута
const itemCard = computed(() => store.state.ItemCard);
const Items = computed(() => store.state.items);
router.push({ name: 'ItemPage', params: { id: itemCard.value.id } });
const randomIndices = (n, max) => {
    const set = new Set();
    while (set.size < n) {
        set.add(Math.floor(Math.random() * max));
    }
    return Array.from(set);
};

const randomItems = computed(() => {
    const indices = randomIndices(3, Items.value.length); // Выбираем 3 случайных товара
    return indices.map(index => Items.value[index]);
});

onMounted(async () => {
    // Загрузка данных о товаре по id
    await store.dispatch('fetchItemById', itemId.value);
    await store.dispatch('updateRandomItems');
    // Дополнительная логика, если необходимо
});
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
    background-color: rgb(0, 0, 0);
    color: white;
}

.buy__btn {
    padding: 5px 9px;
    background-color: rgb(0, 255, 55);
    border: 1px solid rgb(65, 63, 63);
    border-radius: 10px;
    font-weight: bold;
    text-transform: uppercase;
    color: rgb(35, 37, 37);
}




.recomend {
    margin-top: 40px;
    border-top: 1px solid black;
}
</style>
