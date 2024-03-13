<script>
import axios from 'axios';
import store from '@/store';

export default {
  props: {
    id: Number,
    title: String,
    price: Number,
    size: Array,
    imgUrl: Array // Добавлен новый пропс для массива URL изображений

  },


  data() {
    return {
      selectedSize: null // Инициализируем selectedSize как null

    };
  },
  methods: {
    // 1Выбор размера
    selectSize(size) {
      this.selectedSize = size;
    },

    //2  Добавление в корзину на бэк
    async AddToBasket() {
      try {
        const response = await axios.post('https://52229c9522e6c31a.mokky.dev/basket', {
          id: this.id,
          title: this.title,
          price: this.price,
          size: this.selectedSize,
          imgUrl: this.imgUrl
        });
        // Вызываем действие fetchCartItems после успешного добавления товара в корзину
        await store.dispatch('fetchCartItems');
      } catch (error) {
        alert('Произошла ошибка при добавлении товара в корзину.');
      }
    },
  },

  mounted() {
    // Устанавливаем selectedSize первым элементом массива size, если он существует
    if (this.size && this.size.length > 0) {
      this.selectedSize = this.size[0];
    }
  }
}
</script>


<template>
  <div class="item">
    <div class="ItemCart">
      <div class="img">
        <img :src="imgUrl" alt="sneakers" class="imgItem" />
      </div>
      <div class="textItem">
        <p class="title">{{ title }}</p>
        <p class="price">{{ price }} руб</p>
        <p class="sizeItem">Размеры:</p>
        <p class="sizeItem"> US
          <span v-for="size in size" :key="size" @click="selectSize(size)"
            :style="{ color: selectedSize === size ? 'black' : 'grey', fontWeight: selectedSize === size ? '900' : '400' }">
            {{ size }}
          </span>
        </p>
      </div>
      <div class="buttons__item"></div>
    </div>
    <div class="item__btns">
      <button @click="AddToBasket">В корзину</button>

      <button>Купить сейчас</button>
    </div>
  </div>
</template>

<style scoped>
.item:hover .item__btns button,
.item:hover .sizeItem span,
.item:hover .sizeItem {
  opacity: 1;
}

.sizeItem {
  opacity: 0;
  text-align: start;
  padding: 0 10px;
}

span {
  padding: 2px 2px;
  text-align: center;
  margin-left: 3px;
  color: gray;
  opacity: 0;
  cursor: pointer;
  transition: 0.2s;
}

span:hover {
  color: black;
}

.item__btns {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 5px 0px;
  color: white;

}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

button:hover {
  background-color: rgb(215, 207, 207);
  color: black;
  transition: 0.3s;

}

button {
  margin: 0;
  background-color: rgba(192, 191, 191, 0.876);
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 13px;
  color: inherit;
  padding: 5px 5px;
  opacity: 0;
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
  max-height: 200px;
  max-width: 100%;
  padding: 0 10px;
}

.price {
  font-size: 13px;
  font-weight: 800;
}
</style>