<template>
  <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'" :coverflowEffect="{
    rotate: 40,
    stretch: 10,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }" :pagination="true" :modules="modules" class="mySwiper">
    <swiper-slide>
      <p class="item__title"> Adidas Forum 84 High “White Magic Beige”</p>
      <img src="https://sun9-61.userapi.com/nyfB4NCTkmUhJvqCrc41Tdr74CqHzh7Z6XYupw/1So8bEoetpc.jpg" />
    </swiper-slide><swiper-slide>
      <p class="item__title">New Balance 2002R “Sweet Caramel”</p><img
        src="https://sun9-34.userapi.com/JXB4dUuzjSk_hkhETIkL1HLum3AJ1isNrfg-JA/zLFA9TJys5c.jpg" />
    </swiper-slide><swiper-slide>
      <p class="item__title">New Balance 2002R “White Natural Indigo”</p><img
        src="https://sun9-8.userapi.com/260wpA9PC7TI0DQXT8FT-3U1QP2SonpKpPI0qQ/T1evjXuvfJ0.jpg" />
    </swiper-slide><swiper-slide>
      <p class="item__title">Adidas Niteball “Crystal White”</p><img
        src="https://sun9-68.userapi.com/6bbu2-knuT0wys1UrAF1Ov8Qgq8zb_8wRdGjxw/RHesizjQuNA.jpg" />
    </swiper-slide><swiper-slide>
      <p class="item__title">Adidas Niteball</p><img
        src="https://sun9-79.userapi.com/p3OfxQKZIN-g4PJ8Xh4_8FUQ0D6LJJfCFceeJQ/IKYp6532Szs.jpg" />
    </swiper-slide><swiper-slide>
      <p class="item__title">Adidas Athen City Series x Size</p><img
        src="https://sun9-45.userapi.com/qMGbQlFIukSg_OhlUJWzILnrHjUgaHeBOjXsug/qBWWhnoce1o.jpg" />
    </swiper-slide><swiper-slide>
      <p class="item__title">Nike Air Max 95 “Grey Fog””</p><img
        src="https://sun9-43.userapi.com/K5pk5rw_cKZptPR0JB7BwOnRj6V9P5WrG5YmcQ/qKAwNoEY0ys.jpg" />
    </swiper-slide><swiper-slide>
      <p class="item__title">New Balance XC-72 “Beige Gum”</p><img
        src="https://sun9-25.userapi.com/KByJ2drr8b-hC45iuGTDwhDBxAbK2QvxRz0odA/A8A7iYrlz_4.jpg" />
    </swiper-slide><swiper-slide>
      <p class="item__title"> Adidas Forum 84 High “White Magic Beige”</p><img
        src="https://sun9-80.userapi.com/9PFX5AvvTWrYH_u4IIbu_b0d8rT1_GzFNfm49A/rhO3pzKaejc.jpg" />
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
    };
  },
};
</script>
<style>
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