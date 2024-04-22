<script>
export default {
  props: {
    id: Number,
    title: String,
    price: Number,
    size: Number,
    imgUrl: Array,
    remove: Function //пропс для метода удаления
  },
  methods: {
    handleRemove() {
      this.remove(this.id); //метод удаления, переданный через пропс
    }
  }

}
</script>


<template>
  <div class="basketItem">
    <div class="basketItem__img">
      <img :src="imgUrl[0]" alt="#" />
    </div>
    <div class="basketItem__text">
      <p>Название модели: <span>{{ title }}</span></p>
      <p>Цена: <span>{{ price }} </span></p>
      <p>Размер: <span>{{ size }} US</span></p>
    </div>
    <div class="basketItem__btn">
      <svg @click="handleRemove" width="30px" height="30px" viewBox="0 0 24 24" fill="none" class="close__svg "
        xmlns="http://www.w3.org/2000/svg">
        <path d="M9.16998 14.83L14.83 9.17004" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round" />
        <path d="M14.83 14.83L9.16998 9.17004" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round" />
        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32"
          stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  </div>

</template>



<style scoped>
.close__svg:hover path {
  stroke: #6e1010;
  /* Замените на желаемый цвет при наведении */
}

span {
  color: rgb(255, 0, 0);
  font-weight: 800;
}

p {
  margin: 0;
  margin-bottom: 5px;
}

img {
  height: 100px;
  width: 100px;
  border-radius: 10px;
}

.close__svg {
  border: none;
  cursor: pointer;
}

.basketItem {
  background-color: rgba(209, 206, 202, 0.364);
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 5px;
  border-radius: 20px;
}

.basketItem__img {}

.basketItem__text {
  max-width: 50%;
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 2px;
}
</style>