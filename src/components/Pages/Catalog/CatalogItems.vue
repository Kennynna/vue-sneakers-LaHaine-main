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
        <p class="sizeItem"> US
          <span v-for="(size, index) in catalogItem.size" :key="index" @click="selectSize(size)"
            :style="{ color: selectedSize === size  ? 'black' : 'grey', fontWeight: selectedSize === size ? '900' : '400' }">
            {{ size }}
          </span>
        </p>
      </div>
      <div class="buttons__item"></div>
    </div>
    <div class="item__btns">
      <button @click="AddToBasket">В корзину</button>

      <button @click="viewItem">Посмотреть товар</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { useStore } from 'vuex';
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  props: {
    catalogItem: Object,
    id: String
  },
  setup(props) {
    const store = useStore();
    const selectedSize = ref(0);
    const router = useRouter();
    const selectSize = (size) => {
      selectedSize.value = size;
    };
    const AddToBasket = async () => {
      try {
        await axios.post('https://52229c9522e6c31a.mokky.dev/basket', {
          id: props.catalogItem.id,
          title: props.catalogItem.title,
          price: props.catalogItem.price,
          size: selectedSize.value,
          imgUrl: props.catalogItem.imgUrl
        });
        await store.dispatch('fetchCartItems');
      } catch (error) {
        alert('Произошла ошибка при добавлении товара в корзину.');
      }
    };
    onMounted( () => {
      if (props.catalogItem.size) {
        selectedSize.value = props.catalogItem.size[0];
      }else{
        console.log('Что то не так')
      }
    });

    const viewItem = async () => {
      // Добавление товара в ItemCard
      await store.dispatch('addItemCard', {
        id: props.catalogItem.id,
        title: props.catalogItem.title,
        price: props.catalogItem.price,
        size: props.catalogItem.size,
        imgUrl: props.catalogItem.imgUrl
      });
      await store.dispatch('updateRandomItems');
      // Перенаправление на страницу товара
      await router.push({ name: 'ItemPage', params: { id: props.catalogItem.id } });
    };

    onUnmounted(() => {
      window.removeEventListener('click', viewItem)
      window.removeEventListener('click', AddToBasket)
    });
    return {
      selectedSize,
      selectSize,
      AddToBasket,
      viewItem
    };
  }
};
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
}

button:hover {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  transition: 0.3s;

}

button {
  margin: 0;
  background-color: rgba(192, 191, 191, 0.876);
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 13px;
  color: inherit;
  padding: 5px 5px;
  font-weight: 600;
  text-transform: uppercase;
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
}

.item:hover {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

.ItemCart {

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  gap: 1px;
  max-width: 200px;
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
}

.price {
  font-size: 13px;
  font-weight: 800;
}
</style>