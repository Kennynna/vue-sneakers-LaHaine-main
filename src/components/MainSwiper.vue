<template>
  <div class="swiper__content">
    <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'" :coverflowEffect="{
      rotate: 40,
      stretch: 10,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }" :pagination="true" :modules="modules" class="mySwiper">
      <swiper-slide v-for="(item, index) in items" :key="index">
        <p class="item__title">{{ item.title }}</p>
        <img :src="item.imgUrl[0]" />
      </swiper-slide>
    </swiper>
  </div>

</template>


<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';


import  axios  from 'axios';
import { onMounted } from 'vue';
import {ref} from 'vue'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
  const items = ref([])
  const getItems = async () =>{
    try{
    const response = await axios.get('https://52229c9522e6c31a.mokky.dev/newMonthItems')
    items.value= response.data;
    }
      catch{
        alert('Не удалось отправить запрос')
      }

  }
  onMounted(getItems)


    return {
      items,
      modules: [EffectCoverflow, Pagination],
    };
  },
};
</script>


<style scoped>

.swiper__content{
  animation-name: bos;
  animation-duration: 2s;
  will-change: bos;
}
@keyframes bos{
from{
  transform: translateX(100%);
}
 to {
  transform: translateX(0);
 }
}
.swiper {
  width: 100%;
  padding-top: 20px;
  padding-bottom: 50px;
  background-color: rgb(255, 255, 255);
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}

.item__title {
  font-style: italic;
  font-weight: 800;
  font-size: 16px;
}
</style>