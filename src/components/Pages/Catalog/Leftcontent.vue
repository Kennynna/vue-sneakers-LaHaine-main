<script setup>
import { ref } from 'vue'
const visibleSneakers = ref(false);
const visibleClothes = ref(false);
const visibleAccessories = ref(false);

const toggleVisibility = (item) => {
  if (item === 'sneakers') {
    visibleSneakers.value = !visibleSneakers.value;
  } else if (item === 'clothes') {
    visibleClothes.value = !visibleClothes.value;
  } else if (item === 'accessories') {
    visibleAccessories.value = !visibleAccessories.value
  }
}
</script>

<template>
  <div class="leftmenu">
    <h4 class="sneakers forMan font-bold">Для Мужчин</h4>
    <ul class="sneakers_table">
      <p @click="toggleVisibility('sneakers')" class="sneakers_table-item">Кроссовки</p>
      <div class="sneakers">
        <ul v-if="visibleSneakers" class="categoryItem visible">
          <li class="sneakers__li">ADIDAS</li>
          <li class="sneakers__li">NIKE</li>
          <li class="sneakers__li">NEW BALANCE</li>
        </ul>
      </div>

      <p @click="toggleVisibility('clothes')" class="sneakers_table-item">Одежда</p>
      <div class="clothes">
        <ul v-if="visibleClothes" class="categoryItem visible">
          <li class="active">ADIDAS</li>
          <li>NIKE</li>
          <li>NEW BALANCE</li>
        </ul>
      </div>

      <p @click="toggleVisibility('accessories')" class="sneakers_table-item">Аксессуары</p>
      <div class="accessories">
        <ul v-if="visibleAccessories" class="categoryItem visible">
          <li>СУМКИ</li>
          <li>ПАРТОМНЕ</li>
          <li>СЕРДСТВА ДЛЯ УХОДА</li>
        </ul>
      </div>
    </ul>
    <h4 class="sneakers forWoman font-bold">Для Женщин</h4>

    <ul class="sneakers_table ">
      <li class="sneakers_table-item">Кроссовки</li>
      <li class="sneakers_table-item">Одежда</li>
      <li class="sneakers_table-item">Аксессуары</li>
    </ul>
  </div>
</template>

<style scoped>
.active{
  font-weight: 800  ;
  color: black;
}
.sneakers__li {
  cursor: pointer;
}

.categoryItem {
  display: none;

}

.sneakers,
.clothes,
.accessories {
  overflow: hidden;
}

.categoryItem.visible {
  display: block;
  animation-name: visible;
  animation-duration: 0.2s;


}

@keyframes visible {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0%);
  }
}

p,
li,
ul {
  outline: none;
}

li{
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

.sneakers {}

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