<template>
  <div class="item">
    <div class="ItemCart">
      <div class="img">
        <img :src="catalogItem.imgUrl[0]" alt="sneakers" class="imgItem" />
      </div>
      <div class="textItem">
        <p class="title">{{ catalogItem.title }}</p>
        <p class="price">{{ catalogItem.price }} руб</p>
        <p class="sizeItem">Размеры:</p>
        <p class="sizeItem"> <span v-if="catalogItem.category === 'sneakers'">US</span>
          <span v-for="(size, index) in catalogItem.size" :key="index" @click="selectSize(size)"
            :style="{ color: selectedSize === size ? 'black' : 'grey', fontWeight: selectedSize === size ? '900' : '400' }">
            {{ size }}
          </span>
        </p>
      </div>
      <div class="buttons__item"></div>
    </div>
    <div class="item__btns">
      <button @click="addToBasket">В корзину</button>
      <button @click="viewItem">Посмотреть товар</button>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  catalogItem: Object,
  id: String,
});

const store = useStore();
const selectedSize = ref(props.catalogItem.size ? props.catalogItem.size[0] : null); // Handle default size
const router = useRouter();
const selectSize = (size) => {
  selectedSize.value = size;
};
//в корзину
const addToBasket = async () => {
  if (!selectedSize.value) {
    console.error('Please select a size before adding to basket.');
    return;
  }

  const item = {
    id: props.catalogItem.id,
    title: props.catalogItem.title,
    price: props.catalogItem.price,
    size: selectedSize.value,
    imgUrl: props.catalogItem.imgUrl,
  };

  await store.dispatch('addToBasket', item);
};
// в itemPage
const viewItem = async () => {
  try {
    await store.dispatch('addItemCard', {
      id: props.catalogItem.id,
      title: props.catalogItem.title,
      price: props.catalogItem.price,
      size: props.catalogItem.size,
      imgUrl: props.catalogItem.imgUrl,
    });
    await store.dispatch('updateRandomItems');
    await router.push({ name: 'ItemPage', params: { id: props.catalogItem.id } });
    window.scrollTo(0, 0);
  } catch (error) {
    console.error('Error adding item to card or updating random items:', error);
  }
};

onMounted(() => {
  // Handle potential errors in catalogItem data
  if (!props.catalogItem || !props.catalogItem.size) {
    console.error('Invalid catalog item data. Please check data source.');
  }
});

</script>
<style scoped>
.sizeItem {
  text-align: start;
  padding: 0 10px;
}

span {
  padding: 2px 2px;
  text-align: center;
  margin-left: 3px;
  color: gray;
  cursor: pointer;
  transition: 0.2s;
}

span:hover {
  color: black;
}

.item__btns {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 5px 0px;
  color: white;
  gap: 5px;

}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.149);

}

button:hover {
  background-color: rgb(65, 63, 63);
  color: white;
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.685) inset;

}

button {
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

p {
  margin: 0px 0px;
  padding: 0px 0px;
}

.textItem {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  text-align: center;
  justify-content: space-between;
  padding: 0;
  gap: 5px;
  min-height: 100px
}

.item {
  background-color: rgba(255, 255, 255, 0.658);

  border-radius: 10px;
  transition: 0.2s;
  max-height: 500px;
}

.item:hover {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

.ItemCart {

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  gap: 1px;
  max-width: 250px;
  max-height: 500px;
  flex-direction: column;
  flex: 1;
}

img {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  border-radius: 10px;
}

.title {
  height: 60px;
  max-width: 100%;
  padding: 0 10px;
  font-size: 17px;
}

.price {
  font-size: clamp(0.813rem, 0.699rem + 0.57vw, 1.125rem);
  font-weight: 800;
}
@media (max-width:301px) {
  .title{
    line-height: 100%;
    font-size: 16px;
  }
}
</style>