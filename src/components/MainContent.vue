<script setup>
import { computed, onMounted } from 'vue';
import Item from '@/components/Item.vue'
import MainSwiper from '@/components/MainSwiper.vue';
import PresentInfo from '@/components/PresentInfo.vue'
import { useStore } from 'vuex';

onMounted(() => {
  store.dispatch('fetchItems');
})
const store = useStore()
const items = computed(() => store.state.items)
const sortedItems = items.value.sort((a, b) => b.buyCount - a.buyCount).slice(0, 3)

</script>



<template>
  <div class="maincontentbody">
    <h2 class="newItems">Новинки этого месяца</h2>
    <div class="block-swiper">
      <MainSwiper />
    </div>
    <div class="mainContent">
      <h2 class="newItems top">TOP 3 orders</h2>
    </div>
    <div class="itemCart__content">
      <Item v-for="(item, index) in sortedItems" :key="index" :title="item.title" :price="item.price" :sizes="item.size"
        :imgUrl="item.imgUrl" :buyCount="item.buyCount" :id="item.id">
      </Item>
    </div>
    <div class="logo-text-block">
      <h2 class="logo-text logo-name font-bold text-9xl mt-40 tracking-wide"> La Haine</h2>
      <h2 class="logo-text logo-name font-bold text-3xl tracking-wide">SINCE 2016</h2>
      <p class="logo-desc logo-name font-bold text-6xl mb-20 mt-10 tracking-wide"> The World Is <span class="par"><span
            class="Y">Y</span></span>our</p>
    </div>
    <!-- <PresentInfo /> -->
  </div>

</template>

<style>
.logo-text {
  opacity: 0;
  transform-style: flat;
  animation-name: lahaine;
  animation-duration: 2s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
}

@keyframes lahaine {
  from {
    scale: 0.1;
    opacity: 0;
    transform: translateX(-100%);
  }

  to {
    scale: 1;
    opacity: 1;
    transform: translateX(0);
  }
}

.logo-desc {
  opacity: 0;
  transform: rotateZ(-10deg);
  animation-name: logo-text;
  animation-duration: 2s;
  animation-delay: 2s;
  animation-fill-mode: forwards;
}

@keyframes logo-text {
  from {
    opacity: 0;
    transform: rotateX(30deg);
  }

  to {
    opacity: 1;
    transform: rotateX(0deg);
    transform: rotateZ(-5deg);
  }
}



@keyframes upercase {
  from {
    text-transform: lowercase;
  }

  to {
    text-transform: uppercase;
  }
}

.par {
  position: relative;
}

.Y::before {
  position: absolute;
  content: '';
  top: 0;
  left: 50%;
  height: 100%;
  opacity: 0;
  width: 4px;
  background: red;
  transform: rotate(20deg);
  animation-name: line;
  animation-duration: 2s;
  animation-delay: 3s;
  animation-fill-mode: forwards;

}

@keyframes line {
  from {
    height: 0%;
    opacity: 0;
  }

  to {
    height: 100%;
    opacity: 1;
  }
}

.logo-name {
  font-family: 'Cinzel', Courier, monospace;
}

.block-swiper {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}

.slecet-filter {
  margin: 0 auto;
  min-width: 30%;
  max-width: 50%;
  font-size: 1rem;
  background-color: rgb(235, 235, 235);
  color: rgb(68, 68, 68);

}

.option-filter {
  color: blue;
}

.maincontentbody {
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  padding: 10px 1px;
  overflow: hidden;
}

h2 {
  text-align: center;
}

.itemCart__content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  animation-name: aos;
  animation-duration: 2s;
}

@keyframes aos {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
}

.itemCart {
  border: 2px solid rgba(61, 54, 54, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 10px 10px;
  -webkit-box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
}

.itemCart__mainImg {}

.MainImg {
  width: 250px;
  height: 250px;
}

.itemCart__title {
  margin: 0;
  font-size: 1.4rem;
  max-width: 240px;
  text-align: center;
}

.price {
  margin: 5px 0;
  font-size: 1.3rem;
}

.size {
  padding: 5px 5px;
  display: flex;
  gap: 5px;
  align-items: center;
  flex-wrap: wrap;
  max-width: 250px;
  font-size: 1.1rem;
  position: relative;
}

.size__item {
  background-color: rgba(108, 108, 107, 0.951);
  padding: 3px 3px;
  color: white;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  cursor: pointer;
  transition: 0.3s;
}

.size__item:hover {
  background-color: black;
  color: white;
}



.sizelist {
  display: flex;
  flex-direction: column;
  gap: 0px;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 43px;
  top: 44px;
}

.arrowUp {
  cursor: pointer;
}

.arrowUp.active {
  transform: rotate(180deg);
}

.sizelist {
  display: none;
  /* остальные стили */
}

.sizelist.active {
  display: flex;
  animation-name: activate;
  animation-duration: 0.4s;
}

@keyframes activate {
  0% {
    height: 0;
  }

  100% {
    height: 100%;
  }
}

.newItems {
  padding-top: 40px;
  font-size: clamp(1.625rem, 1.307rem + 1.59vw, 2.5rem)
}
</style>
