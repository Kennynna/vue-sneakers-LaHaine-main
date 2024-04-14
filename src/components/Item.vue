<script>
export default {
  props: {
    title: String,
    price: Number,
    sizes: Array,
    imgUrls: Array, // Добавлен новый пропс для массива URL изображений
    buyCount: Number
  },
  data() {
    return {
      selectedSize: this.sizes[0],
      currentImageIndex: 1, // Индекс текущего изображения
      toggleImage: false,
      favoriteSrc: '/public/sneakersCart/Icons/add-to-favorite.svg', // Путь к изображению по умолчанию
      favoriteSrcSelected: '/public/sneakersCart/Icons/favourite.svg' //
    }
  },
  methods: {
    toggleSizes() {
      this.$refs.sizelist.classList.toggle('active')
      this.$refs.arrowUp.classList.toggle('active')
    },
    selectSize(selectedSize) {
      this.selectedSize = selectedSize
      this.$refs.sizelist.classList.remove('active')
      this.$refs.arrowUp.classList.remove('active')
    },
    nextImage() {
      if (this.currentImageIndex < this.imgUrls.length - 1) {
        this.currentImageIndex++
      }
    },
    prevImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--
      }
    },
    toggleFavorite() {
      console.log(this.toggleImage)
      this.toggleImage = !this.toggleImage // Переключаем значение toggleImage
    }
    
  }

}
</script>

<script setup>
import Buttonn from './button.vue'
</script>

<template>
  <div class="itemCart">
    <div class="favorite__list">
      <div class="favorite__list-drawer">
        <img class="favorite__list-img" :src="toggleImage ? favoriteSrcSelected : favoriteSrc" alt="favorite"
          @click="toggleFavorite" />
      </div>
    </div>
    <div class="itemCart__mainImg">
      <div class="pagination">
        <img class="MainImg" :src="imgUrls[currentImageIndex]" alt="mainImg" />
        <!-- Используем текущее изображение из массива -->
        <svg key class="prevImage" v-if="currentImageIndex > 0" @click="prevImage" width="20px" height="20px"
          viewBox="-102.4 -102.4 1228.80 1228.80" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#aaaaaa"
          stroke="#aaaaaa" stroke-width="102.4">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"
            stroke-width="2.048"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#000000"></path>
          </g>
        </svg><!-- Кнопка для переключения на следующее изображение -->
        <svg class="nextImage" v-if="currentImageIndex < imgUrls.length - 1" @click="nextImage" width="20px"
          height="20px" viewBox="-102.4 -102.4 1228.80 1228.80" version="1.1" xmlns="http://www.w3.org/2000/svg"
          fill="#aaaaaa" stroke="#aaaaaa" stroke-width="102.4">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"
            stroke-width="2.048"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#000000" rotate="180">
            </path>
          </g>
        </svg>
        <!-- Кнопка для переключения на предыдущее изображение -->
      </div>
    </div>
    <p class="itemCart__title">{{ title }}</p>
    <div class="size">
      <span class="size__text">Размер:</span>
      <p class="selected-size">{{ selectedSize }} US</p>
      <svg @click="toggleSizes" ref="arrowUp" class="arrowUp" width="15px" height="15px" viewBox="0  0  24  24"
        fill="black" xmlns="http://www.w3.org/20000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M18.2929  15.2893C18.6834  14.8988  18.6834  14.2656  18.2929  13.8751L13.4007  8.9876666C12.6195  8.20726  11.3537  8.20757  10.5729  8.9888835L5.68257  13.8787C5.29205  14.2692  5.29205  14.9024  5.68257  15.2929C6.0731  15.6835  6.70626  15.6835  7.09679  15.2929L11.2824  11.1073C11.673  10.7168  12.3061  10.7168  12.696666  11.1073L16.8787  15.2893C17.2692  15.6798  17.9024  15.6798  18.2929  15.2893Z"
            fill="#0F0F0F0F0F"></path>
        </g>
      </svg>
      <div class="sizelist" ref="sizelist">
        <span class="size__item" v-for="(sizeItem, index) in sizes" :key="index" @click="selectSize(sizeItem)">{{
          sizeItem }}</span>
      </div>
    </div>
    <p class="price">{{ price }} руб</p>
    <p>Количество покупок: {{ buyCount }}</p>
  </div>
</template>

<style scoped>
.sizelist{
  z-index: 100;
}
.itemCart__btn:hover {
  background-color: black;
  color: white;
}
.itemCart__btn {
  padding: 5px 15px;
  transition: 0.3s;
  border: none;
  border-radius: 15px;
  margin-bottom: 5px;
  background-color: rgb(19, 46, 69);
  cursor: pointer;
  font-size: 1.1rem;
}

.itemCart__mainImg {
  overflow: hidden;
}

.MainImg {
  transition: 0.2s;
  image-orientation: flip;
}

.MainImg:hover {
  scale: 1.2;
}

.itemCart {
  position: relative;
}

.favorite__list-drawer {
  opacity: 0;
  display: block;
  position: absolute;
  height: 50px;
  width: 100%;
  background-color: rgba(176, 174, 174, 0.697);
  top: 0;
  right: 0;
  z-index: 16;
  transition: 0.3s;
}

.favorite__list-drawer:hover {
  opacity: 1;
}

.favorite__list-img {
  width: 25px;
  height: 25px;
  z-index: 24;
  position: absolute;
  top: 10px;
  right: 10%;
  cursor: pointer;
  transition: 0.3s;
}

.favorite__list-img:hover {
  scale: 1.1;
}

.pagination {
  position: relative;
}

.nextImage,
.prevImage {
  position: absolute;
  bottom: 30px;
  cursor: pointer;
}

.nextImage {
  right: 0px;
}

.prevImage {
  left: 0;
  transform: rotate(180deg);
}

.nextImage:hover {
  scale: 1.1;
  fill: black;
}

.prevImage:hover {
  scale: 1.1;
}
</style>
