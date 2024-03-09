<script setup>
import HeaderVue from './components/Header.vue'
import { ref } from 'vue'

// Создаем переменную состояния для отслеживания видимости мобильного меню
const isMobileMenuVisible = ref(false)

// Функция для переключения видимости мобильного меню
const toggleMobileMenu = () => {
  isMobileMenuVisible.value = !isMobileMenuVisible.value
}
</script>

<template>
  <div class="content">
    <div class="mobnav" :class="{ 'mobnav-active': isMobileMenuVisible }" @click="toggleMobileMenu">
      <span class="spannav1"></span>
      <span class="spannav2"></span>
      <span class="spannav3"></span>
    </div>
    <div class="mob_header" v-show="isMobileMenuVisible">
      <div class="header__items-profile">
        <a href="" @click="toggleMobileMenu">Войти</a>
        <a href="" @click="toggleMobileMenu">Регистрация</a>
      </div>
      <router-link to="/" @click="toggleMobileMenu">Главная</router-link>
      <router-link to="/about" @click="toggleMobileMenu">О нас</router-link>
      <router-link to="/catalog" @click="toggleMobileMenu">Каталог</router-link>
      <router-link to="/" @click="toggleMobileMenu">Контакты</router-link>
      <router-link to="/" @click="toggleMobileMenu">Отзывы</router-link>
    </div>
    <HeaderVue />
    <router-view></router-view>
  </div>
</template>

<style >
body{
  background: -webkit-linear-gradient(225deg, rgb(184, 224, 215), rgb(255, 255, 255));
background: -moz-linear-gradient(225deg, rgb(184, 224, 215), rgb(255, 255, 255));
background: linear-gradient(225deg, rgb(184, 224, 215), rgb(255, 255, 255));
background-repeat: no-repeat;
}
.mob_header {
  display: none;
  flex-direction: column;
  position: absolute;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(31, 31, 30, 0.982);
  z-index: 100;
  text-align: center;
  justify-content: space-around;
}
.mobnav {
  display: none;
  width: 25px;
  height: 20px;
  position: fixed;
  cursor: pointer;
  z-index: 101;
}
.mobnav .spannav1::after {
  position: absolute;
  content: '';
  width: 100%;
  height: 3px;
  background-color: black;
}
.mobnav .spannav2::after {
  position: absolute;
  content: '';
  bottom: 0;
  width: 100%;
  height: 3px;
  background-color: black;
}
.mobnav .spannav3::after {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  content: '';
  bottom: 0;
  width: 100%;
  height: 3px;
  background-color: black;
}

.content {
  position: relative;
}

@media (max-width: 790px) {
  .mob_header {
    display: flex;
  }
  .mobnav {
    display: block;
    top: 30px;
    left: 30px;
  }

  a {
    color: white;
    font-weight: 800;
  }
  .header__items-profile {
    display: flex;
    align-items: start;

    justify-content: space-between;
    padding: 5px 20px;
  }
  .mobnav-active .spannav1::after,
.mobnav-active .spannav2::after,
.mobnav-active .spannav3::after {
 background-color: rgb(255, 255, 255);
 transition: transform 0.3s ease, top 0.3s ease, background-color 0.3s ease;
}
.mobnav-active .spannav1::after {
    transform: rotate(45deg);
    top: 50%;
}
.mobnav-active .spannav2::after {
    transform: rotate(-45deg);
    top: 50%;
}
.mobnav-active .spannav3::after {
 display: none;
}
}
</style>