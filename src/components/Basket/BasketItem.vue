<script>
export default {
 props: {
    id: Number,
    title: String,
    price: Number,
    size: Number,
    imgUrl: Array,
    remove: Function // Добавьте пропс для метода удаления
 },
 methods: {
    handleRemove() {
      this.remove(this.id); // Вызывайте метод удаления, переданный через пропс
    }
 }
}
</script>



<template>
  <div class="basketItem">
    <div class="basketItem__img">
      <img
        :src="imgUrl"
        alt="#"
      />
    </div>
    <div class="basketItem__text">
      <p>Название модели: <span>{{title}}</span></p>
      <p>Цена: <span>{{ price }} </span></p>
      <p>Размер: <span>{{size}} US</span></p>
    </div>
    <div class="basketItem__btn">
      <button @click="handleRemove">X</button>
    </div>
  </div>
</template>



<style scoped>
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
button {
  color: rgb(59, 59, 59);
  border: none;
  cursor: pointer;
  padding: 5px 8px;
  text-align: center;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(106, 38, 222, 0.2) inset;
-moz-box-shadow: 0px 5px 10px 2px rgba(106, 38, 222, 0.2) inset;
box-shadow: 0px 5px 10px 2px rgba(106, 38, 222, 0.2) inset;
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
.basketItem__img {
}
.basketItem__text {
  max-width: 50%;
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 2px;
}
</style>