<script setup>
</script>
<template>
  <div class="Present">
    <div class="present-item">
      <span class="line"></span>
      <img class="lineImg" src="https://avatars.mds.yandex.net/get-mpic/4078462/img_id3315207136046471698.jpeg/orig" alt="">
      <p class="text-7xl"> Наш магазин - ваш идеальный выбор!</p>
      <img src="/public/slideSneakers/yellow.png" alt="">
      <p class="text-6xl"> Открывая двери с 2016 года</p>

    </div>
    <div class="present-item2">
      <img class="lineImg2" src="https://art.kartinkof.club/uploads/posts/2023-07/1689213529_art-kartinkof-club-p-idei-dlya-srisovki-shestigrannik-91.png" alt="">
      <span class="line2"></span>
      <span class="line3"></span>
      <p class="text-7xl"> Более <span>1000 </span>довольных клиентов</p>
      <img src="/public/slideSneakers/yellow.png" alt="">
      <p class="text-6xl"> Доверие и качество - наш приоритет</p>

    </div>
    <div class="present-item3">
      <p class="text-7xl"> Наш магазин - ваш идеальный выбор!</p>
      <img src="/public/slideSneakers/yellow.png" alt="">
      <p class="text-6xl"> Открывая двери с 2016 года</p>
    </div>
    <div class="present-item4">
      <p class="text-7xl"> Более <span>1000 </span>довольных клиентов</p>
      <img src="/public/slideSneakers/yellow.png" alt="">
      <p class="text-6xl"> Доверие и качество - наш приоритет</p>

    </div>
    <!-- Добавьте больше элементов по мере необходимости -->
  </div>
</template>

<style scoped>
.lineImg{
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  z-index: 1;
  top: 0;
  right: -650px;

}
.lineImg2{
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  z-index: 1;
  top: -200px;
  left: -650px;

}
.line::before {
  content: '';
  width: 321px;
  height: 3px;
  background-color: rgb(0, 0, 0);
  position: absolute;
  right: -321px;
  top: 50%;
  transform: translateY(-50%);
  animation-timing-function: ease-in; 
  animation-name: opaciry;
  animation-duration: 2s;
}
@keyframes opaciry{
  from{
    opacity: 0;
    width: 0px;
  }
  to{
    opacity: 1;
    width: 321px;
  }
}
.line2::before{
  content: '';
  width: 3px;
  height: 704px;
  background-color: rgb(0, 0, 0);
  position: absolute;
  top: -704px;
  transform: translatex(-20%);
  animation-name: opaciry1;
  animation-timing-function: ease-in-out;
  animation-duration: 2s;
}
@keyframes opaciry1{
  from{
    opacity: 0;
    height: 0px;
  }
  to{
    opacity: 1;
    height: 669px;
  }
}
.line3::before{
  content: '';
  width: 321px;
  height: 3px;
  background-color: rgb(0, 0, 0);
  position: absolute;
  left: -321px;
  top: 50%;
  transform: translateY(-50%);
  animation-name: opaciry3;
  animation-timing-function: ease-in-out;
  animation-duration: 2s;
}
@keyframes opaciry3{
  from{
    opacity: 0;
    width: 0px;
  }
  to{
    opacity: 1;
    width: 321px;
  }
}
.img {
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;

}

.Present {
  display: grid;
  grid-template-columns: (1fr);
  flex-direction: column;
  gap: 300px;
  font-family: "Rubik Dirt", system-ui;;
  

}

.present-item3,
.present-item {
  margin-top: 100px;
  padding: 20px;
  width: 50%;
  border-radius: 30px;
  justify-self: start;
  height: max-content;
  background: rgb(75, 69, 72);
  background: radial-gradient(circle, rgba(75, 69, 72, 1) 0%, rgba(0, 0, 0, 1) 100%);
  color: white;
  position: relative;
}

.present-item4,
.present-item2 {
  color: white;
  background: rgb(75, 69, 72);
  background: radial-gradient(circle, rgba(75, 69, 72, 1) 0%, rgba(0, 0, 0, 1) 100%);
  padding: 20px;
  width: 50%;
  border-radius: 30px;
  justify-self: end;
  position: relative;
  /* Выравнивание элемента по правому краю его ячейки */
}
</style>