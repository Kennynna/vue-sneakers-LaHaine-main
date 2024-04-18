<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['update:modelValue']);

const selectedCategory = ref('');

const changeCatecory = (categoryName) => {
  selectedCategory.value = categoryName;
  updateCategory(selectedCategory.value); // Вызываем updateCategory с новым значением
};

const updateCategory = (newCategory) => {
  emit('update:modelValue', newCategory); // Используем 'update:modelValue'
  console.log(newCategory)
};
</script>

<template>
  <div class="leftmenu">
    <ul class="sneakers_table">
      <p class="sneakers_table-item" :class="{ 'active': selectedCategory === '' }"
        @click="changeCatecory('')">Все товары</p>
      <p class="sneakers_table-item" :class="{ 'active': selectedCategory === 'sneakers' }"
        @click="changeCatecory('sneakers')">Обувь</p>
      <p class="sneakers_table-item" :class="{ 'active': selectedCategory === 'clothes' }"
        @click="changeCatecory('clothes')">Одежда</p>
      <p class="sneakers_table-item" :class="{ 'active': selectedCategory === 'Аксессуары' }"
        @click="changeCatecory('Аксессуары')">Аксессуары</p>
    </ul>
  </div>
</template>

<style scoped>
.active {
  font-weight: 800;
  color: white;
  background-color: black;
}

p,
li,
ul {
  outline: none;
}

li {
  color: grey
}

.leftmenu {
  padding: 10px 10px;
  width: 15%;
  background-color: rgb(236 236 236);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 100%;
  align-items: center;
  -webkit-box-shadow: -5px -5px 5px -5px rgba(34, 60, 80, 0.6);
  -moz-box-shadow: -5px -5px 5px -5px rgba(34, 60, 80, 0.6);
  box-shadow: -5px -5px 5px -5px rgba(34, 60, 80, 0.6);
}

.sneakers_table {
  width: 100%;
  list-style: none;
  padding: 0;
  text-align: center;
}

.sneakers_table-item {
  border: 1px solid black;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 3px 2px;
  overflow: hidden;
  cursor: pointer;
}

li {
  transition: 0.3s;
}

li:hover {
  background-color: rgb(63, 65, 63);
  color: aliceblue;
}

@media (max-width:1060px) {
  .sneakers_table-item {
    padding: 3px 10px;
  }
}
</style>