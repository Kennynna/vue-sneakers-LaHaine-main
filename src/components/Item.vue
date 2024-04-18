<script setup>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
const props = defineProps({
  title: String,
  price: Number,
  sizes: Array,
  imgUrl: Array,
  buyCount: Number,
  id: Number,
});
const store = useStore();
const router = useRouter();
const selectedSize = ref(props.sizes[0]);
const currentImageIndex = ref(1); // Use 0 for initial index
const toggleImage = ref(false)
const viewItem = async () => {
  console.log(props.id);
  console.log(props.title);

  try {
    await store.dispatch('addItemCard', {
      id: props.id,
      title: props.title,
      price: props.price,
      size: props.sizes,
      imgUrl: props.imgUrl
    })
    await router.push({ name: 'ItemPage', params: { id: props.id } });
    window.scrollTo(0, 0);
  } catch (error) {
    alert(error)
  }

};

const sizeList = ref(null);
const arrowUp = ref(null);

const toggleSizes = () => {
  sizeList.value.classList.toggle('active');
  arrowUp.value.classList.toggle('active');
};

const selectSize = (size) => {
  selectedSize.value = size;
  sizeList.value.classList.remove('active');
  arrowUp.value.classList.remove('active');
};
const nextImage = () => {
  if (currentImageIndex.value < props.imgUrl.length - 1) {
    currentImageIndex.value++;
  }
};

const prevImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
  }
};

const toggleFavorite = () => {
  toggleImage.value = !toggleImage.value;
};

const favoriteSrc = ref('/public/sneakersCart/Icons/add-to-favorite.svg');
const favoriteSrcSelected = ref('/public/sneakersCart/Icons/favourite.svg');
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
        <img @click="viewItem" class="MainImg" :src="imgUrl[currentImageIndex]" alt="mainImg" />
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
        <svg class="nextImage" v-if="currentImageIndex < imgUrl.length - 1" @click="nextImage" width="20px"
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
      <svg ref="arrowUp" @click="toggleSizes" class="arrowUp" width="15px" height="15px" viewBox="0  0  24  24"
        fill="black">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M18.2929  15.2893C18.6834  14.8988  18.6834  14.2656  18.2929  13.8751L13.4007  8.9876666C12.6195  8.20726  11.3537  8.20757  10.5729  8.9888835L5.68257  13.8787C5.29205  14.2692  5.29205  14.9024  5.68257  15.2929C6.0731  15.6835  6.70626  15.6835  7.09679  15.2929L11.2824  11.1073C11.673  10.7168  12.3061  10.7168  12.696666  11.1073L16.8787  15.2893C17.2692  15.6798  17.9024  15.6798  18.2929  15.2893Z"
            fill="#0F0F0F0F0F"></path>
        </g>
      </svg>
      <div ref="sizeList" class=" sizelist">
        <span class="size__item" v-for="(sizeItem, index) in sizes" :key="index" @click="selectSize(sizeItem)">
          {{ sizeItem }}</span>
      </div>
    </div>
    <p class="price">{{ price }} руб</p>
    <button class="view__btn" @click="viewItem">Посмотреть товар</button>
    <p>Количество покупок: <span class="font-extrabold"> {{ buyCount }} </span> </p>
  </div>
</template>

<style scoped>
.view__btn {
  margin: 0;
  background-color: rgba(192, 191, 191, 0.876);
  cursor: pointer;
  font-size: 13px;
  padding: 5px 9px;
  border-radius: 10px;
  font-weight: bold;
  text-transform: uppercase;
  color: rgb(35, 37, 37);
  transition: 0.3s;

}

.view__btn:hover {
  background-color: rgb(65, 63, 63);
  color: white;
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.685) inset;
}

.sizelist {
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
