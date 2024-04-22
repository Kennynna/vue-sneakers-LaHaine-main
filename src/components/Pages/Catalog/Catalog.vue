<script setup>
import Leftcontent from './Leftcontent.vue'
import CatalogItems from './CatalogItems.vue'
import { computed, onMounted, ref } from 'vue';
import { useStore, } from 'vuex';
const store = useStore();


// Асинхронная функция для загрузки данных
const loadData = async () => {
  await store.dispatch('fetchItems');
};

// Вызовите асинхронную функцию внутри onMounted
onMounted(() =>{
  loadData()
  window.scroll(0,0)
});
const changeModel = ref('')




//Фильтр
const sortOrder = ref('asc');//checkbox 
const search = ref('');//input 
const CategoryChange = ref('');
const filteredItems = computed(() => {
  // Начинаем с полного списка элементов
  let items = store.state.items;

  // Фильтрация по поисковому запросу
  if (search.value) {
    items = items.filter(item => item.title.toLowerCase().includes(search.value.toLowerCase()));
  }
  // Фильтрация по модели
  if (changeModel.value) {
    items = items.filter(item => item.title.toLowerCase().includes(changeModel.value.toLowerCase()));
  }
  if (CategoryChange.value) {
    items = items.filter(item => item.category.toLowerCase().includes(CategoryChange.value.toLowerCase()));
  }
  if (sortOrder.value) {
    items = items.sort((a, b) => {
      const priceA = a.price;
      const priceB = b.price;
      if (sortOrder.value === 'asc') {
        return priceA - priceB;
      } else if (sortOrder.value === 'desc') {
        return priceB - priceA;
      }
    });
  }

  return items;
});

const cleanSearch = () => {
  search.value = ''
}


</script>

<template>
  <div class="sort flex">
    <div class="input-wrapper">
      <input type="text" placeholder="Поиск..." v-model="search" />
      <svg v-if="!search" class="input-icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20.08px" height="20.08px"
        viewBox="0 0 612.08 612.08" style="enable-background:new 0 0 612.08 612.08;" xml:space="preserve">
        <g>
          <path d="M237.927,0C106.555,0,0.035,106.52,0.035,237.893c0,131.373,106.52,237.893,237.893,237.893
      c50.518,0,97.368-15.757,135.879-42.597l0.028-0.028l176.432,176.433c3.274,3.274,8.48,3.358,11.839,0l47.551-47.551
      c3.274-3.274,3.106-8.703-0.028-11.838L433.223,373.8c26.84-38.539,42.597-85.39,42.597-135.907C475.82,106.52,369.3,0,237.927,0z
       M237.927,419.811c-100.475,0-181.918-81.443-181.918-181.918S137.453,55.975,237.927,55.975s181.918,81.443,181.918,181.918
      S338.402,419.811,237.927,419.811z" />
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
      </svg>
      <svg @click="cleanSearch" v-if="search" class="input-icon" width="20px" height="20px" viewBox="0 0 24 24"
        fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.16998 14.83L14.83 9.17004" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round" />
        <path d="M14.83 14.83L9.16998 9.17004" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round" />
        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32"
          stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
    <select name="Сортировка" v-model="sortOrder">
      <option value="asc">по возрастанию</option>
      <option value="desc">по убыванию</option>
    </select>
  </div>

  <div class="container__catalog">
    <Leftcontent v-model="CategoryChange"></Leftcontent>
    <div class="item__catalog">
      <CatalogItems v-for="(item, index) in filteredItems" :key="index" :catalogItem="item" />
    </div>
  </div>
</template>







<style scoped>
select {
  border: 1px solid black;
  border-radius: 10px;
  padding: 7px;
}

.sort {
  margin-top: 20px;
  justify-content: end;
  gap: 20px;
  align-items: center;
}

input {
  padding-right: 30px;
}

.input-wrapper {
  position: relative;
  display: inline-block;
  display: flex;
  align-items: center;
}

.input-wrapper input {
  padding: 5px 10px;
  border: 1px solid grey;
  border-radius: 10px;
}

.input-icon {
  position: absolute;
  right: 10px;
  /* Позиционируем иконку внутри input */
  top: 55%;
  transform: translateY(-50%);
  cursor: pointer;
  /* Предотвращаем клики по иконке */
}

.container__catalog {
  display: flex;
  align-items: start;
  margin-top: 20px;
  gap: 20px;

}

.item__catalog {
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 30px;
  flex-grow: 1;
  flex-shrink: 100;
  justify-content: space-between;
  background-color: rgb(236 236 236);
  border-radius: 20px;
  padding: 20px 20px;
  min-height: 70vh;
}



@media (max-width:760px) {
  .container__catalog {
    flex-direction: column;
  }

  .leftmenu {
    flex-direction: row;
  }

  .sort {
    flex-direction: column;
  }
}


@media (max-width:1060px) {
  .container__catalog {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .leftmenu {
    width: clamp(17.5rem, 14.773rem + 13.64vw, 25rem);
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .item__catalog {
    justify-content: center;
    row-gap: 10px;
  }

}
</style>