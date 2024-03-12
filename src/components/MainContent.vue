<script setup>
import Item from './Item.vue'
import MainSwiper from './MainSwiper.vue';
import Uinput from './Uinput.vue'
</script>



<template>

  <div class="maincontentbody">
    <h2 class="newItems">Новинки этого месяца</h2>
    <div class="block-swiper">
      <MainSwiper />
    </div>
    <div class="mainContent">
      <h2>TOP 3 OF WEEK</h2>
    </div>
    <div class="itemCart__content">
      <Item :title="'Nike Air Force 1 Low ‘07 “Color Of The Month”'" :price="17400" :sizes="[8, 9, 10]" :imgUrls="[
        'https://sun9-32.userapi.com/DcLECQqJbyRbWzJrjkU9WZRLXsCBU3-v8R2zZA/qwPYb6Yv9Mg.jpg',
        'https://sun9-52.userapi.com/sJfRn5VYD3PmNHCvEOOD6WrfMO_BQ9F4ng1BJQ/--EOHsbGWWM.jpg',
        'https://sun9-73.userapi.com/7676EuNiDmw_3rDw_cvHWG1aEgEuad3KIrZisg/sCyOopbMOn4.jpg'
      ]" />
      <Item :title="'New Balance 2002R “Castlerock”'" :price="17990" :sizes="[9, 9.5, 10, 11]" :imgUrls="[
        'https://sun9-77.userapi.com/-FrvyB8Ww09pCXqKnzGIkWeKFN1-Je98zPKU4Q/HkfEN9vlFlM.jpg',
        'https://sun9-40.userapi.com/p8ysZW8agh6RipUkMqgr6WQbqiM4Pi4cMLj1-Q/XqIViW3MnZI.jpg',
        'https://sun9-53.userapi.com/aq6AT5ieJ1RLQrjl4BPNYwIrpecM8u71n85d1Q/MpU5pw6UN78.jpg'
      ]" />
      <Item :title="'Air Jordan 1 Low “White Toe”'" :price="16990" :sizes="[11.5]" :imgUrls="[
        'https://sun9-78.userapi.com/Y0AYoej6sde6w5igRnxhSygYwiYIpOgDxhLtvQ/dKqcl5t-Uvg.jpg',
        'https://sun9-78.userapi.com/E-WlTlZu5qNh8KhozCsPlWkkWfRVQONwSEi0iQ/zV9YtlliBFE.jpg',
        'https://sun9-74.userapi.com/ZHCGNedQnQQ7Mvm1TBO8DWPPtkSaQaD1qm0vzg/zqGpHblnBmA.jpg'
      ]" />
    </div>
  </div>

</template>

<style>
.block-swiper{
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}
.slecet-filter {
  margin-top: 20px;
  margin: 0, auto;
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
  padding: 10px 1px+
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
