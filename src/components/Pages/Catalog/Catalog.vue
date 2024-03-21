<script setup>
import Leftcontent from './Leftcontent.vue'
import CatalogItems from './CatalogItems.vue'
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

// Получаем данные о товарах из Vuex store

// Асинхронная функция для загрузки данных
const loadData = async () => {
  await store.dispatch('fetchItems'); // Замените на действие, которое загружает данные
  // Выполните другие асинхронные операции, если они необходимы
};

// Вызовите асинхронную функцию внутри onMounted
onMounted(loadData);
const items = computed(() => store.state.items);
</script>

<template>
  <div class="container__catalog">
    <Leftcontent />
    <div class="item__catalog">
      <CatalogItems v-for="(item, index) in items" :key="index" :catalogItem="item" />
    </div>
  </div>
</template>







<style scoped>
.container__catalog {
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 20px;

}

.item__catalog {
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



@media (max-width:760px) {
  .container__catalog {
    flex-direction: column;
  }

  .leftmenu {
    width: max-content;
    flex-direction: row;
  }
}


@media (max-width:1060px) {
  .container__catalog {
    flex-direction: column;
  }

  .leftmenu {
    width: max-content;
    flex-direction: row;
  }

  .item__catalog {
    justify-content: center;
    row-gap: 10px;
  }

}
</style>