<script setup>
import HeaderVue from './components/Pages/Header.vue'
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
    <div class="mob_header text-slate-200" v-show="isMobileMenuVisible">
      <div class="header__items-profile">
        <a class="header__link-sign " @click="toggleMobileMenu">Войти</a>
        <a class="header__link-registr" @click="toggleMobileMenu">Регистрация</a>
      </div>
      <router-link class="header__link-item  shadow-lg shadow-blue-500/50" to="/" @click="toggleMobileMenu">Главная</router-link>
      <router-link class="header__link-item  shadow-lg shadow-blue-500/50" to="/about" @click="toggleMobileMenu">О нас</router-link>
      <router-link class="header__link-item  shadow-lg shadow-blue-500/50" to="/catalog" @click="toggleMobileMenu">Каталог</router-link>
      <router-link class="header__link-item  shadow-lg shadow-blue-500/50" to="/" @click="toggleMobileMenu">Контакты</router-link>
      <router-link class="header__link-item  shadow-lg shadow-blue-500/50" to="/" @click="toggleMobileMenu">Отзывы</router-link>
    </div>
    <HeaderVue />
    <router-view></router-view>
  </div>
</template>

<style scoped>
body {
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
  gap: 30px;
  justify-content: center;

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
    margin: 0;
    display: flex;
  }

  .mobnav {
    display: block;
    top: 35px;
    right:  30px;
  }

  a {
    color: white;
    font-weight: 800;
    font-size: 20px;
    padding: 2px 5px;

  }

  .header__items-profile {
    margin-top: 7%;
    display: flex;
    align-items: start;
    justify-content: space-between;

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
.header__link-sign,.header__link-registr {
 background-color: white;
 color: rgb(0, 0, 0);
 margin: 0 10px;

 margin-top: 20px;
 padding: 5px 5;
 border-radius: 10px;
}
.header__link-item{
  font-size: 23px ;
  background-color: black;
  border-radius: 10px;
  
}
}
</style>