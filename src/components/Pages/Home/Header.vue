<script setup>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import 'primeicons/primeicons.css'
const store = useStore();
onMounted(() => {
  // Вызываем действие fetchCartItems после монтирования компонента
  store.dispatch('fetchCartItems');
});
// Получаем значение cartItemCount из Vuex store
const cartItemCount = computed(() => store.state.cartItemCount);

const props = defineProps({
  email: String,
  exit: Function

});

const isUserMenu = ref(false)
const showUserMenu = () => {
  isUserMenu.value = !isUserMenu.value
}

window.addEventListener('click', (event) => {
  const userMenu = document.querySelector('.user__action-list');
  const userButton = document.querySelector('.pi-user');

  if (userMenu && !userMenu.contains(event.target) && event.target !== userButton) {
    isUserMenu.value = false;
  }
  console.log(isUserMenu.value)
});




</script>
<template>
  <header>
    <div class="header__items">
      <div class="header__items-logo">
        <img src="/public/Logo.jpg" alt="#" />
      </div>
      <div class="header__items-links">
        <router-link to="/">Главная</router-link>
        <router-link to="/about">О нас</router-link>
        <router-link to="/catalog">Каталог</router-link>
        <router-link to="/contacts">Контакты</router-link>

      </div>
      <div class="basket">
        <div v-if="store.state.isItemAdded" class="basket__notification">
          <p class="text-xs font-extrabold">товар добавлен в корзину</p>
        </div>
        <div class="basket__number">{{ cartItemCount }}</div>
        <router-link to="/basket">
          <svg width="25px" height="25px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"
            transform="rotate(0)">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M19.5 9.5L18.7896 6.89465C18.5157 5.89005 18.3787 5.38775 18.0978 5.00946C17.818 4.63273 17.4378 4.34234 17.0008 4.17152C16.5619 4 16.0413 4 15 4M4.5 9.5L5.2104 6.89465C5.48432 5.89005 5.62128 5.38775 5.90221 5.00946C6.18199 4.63273 6.56216 4.34234 6.99922 4.17152C7.43808 4 7.95872 4 9 4"
                stroke="#1C274C" stroke-width="1.5"></path>
              <path
                d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4C15 4.55228 14.5523 5 14 5H10C9.44772 5 9 4.55228 9 4Z"
                stroke="#1C274C" stroke-width="1.5"></path>
              <path d="M8 13V17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              </path>
              <path d="M16 13V17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              </path>
              <path d="M12 13V17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              </path>
              <path
                d="M3.864 16.4552C4.40967 18.6379 4.68251 19.7292 5.49629 20.3646C6.31008 21 7.435 21 9.68486 21H14.3155C16.5654 21 17.6903 21 18.5041 20.3646C19.3179 19.7292 19.5907 18.6379 20.1364 16.4552C20.9943 13.0234 21.4233 11.3075 20.5225 10.1538C19.6217 9 17.853 9 14.3155 9H9.68486C6.14745 9 4.37875 9 3.47791 10.1538C2.94912 10.831 2.87855 11.702 3.08398 13"
                stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path>
            </g>
          </svg></router-link>
      </div>
      <div class="user flex align-items-center gap-5">
        <p class="user__email">{{ email === '' ? 'User' : email }}</p>
        <i @click="showUserMenu" class="pi pi-user" style="font-size: 1.5rem"></i>
        <div class="user__action-list" v-if="isUserMenu">
          <ul class="user__action-list-ul">
            <router-link to="/auth">
              <li @click="showUserMenu" class="user__sign">Войти</li>
            </router-link>
            <li class="user__exit" @click="exit(); showUserMenu()">Выход</li>
            <li>{{ email }}</li>
          </ul>
        </div>
      </div>

    </div>
  </header>
</template>

<style scoped>
.user__email {
  white-space: nowrap;
  /* Текст не переносится */
  text-overflow: ellipsis;
  /* Добавляем многоточие */
}

.user__action-list-ul {
  display: flex;
}

li:hover {
  cursor: pointer;
  background-color: black;
  color: white
}

li {
  padding: 5px 5px;
}

.user {
  position: relative;
  align-items: center;
  white-space: nowrap;
  /* Текст не переносится */
  text-overflow: ellipsis;
  /* Добавляем многоточие */
}

.pi-user {
  border: 2px solid black;
  padding: 5px 5px;
  border-radius: 50%;
  cursor: pointer;

}

.user__action-list {
  position: absolute;
  bottom: -60%;
  background-color: white;
  border: 1px solid black;
  border-top: none;
  z-index: 2;
  right: -50%px;
  font-size: 10px;
}

.basket__notification {
  opacity: 0;
  cursor: auto;
  position: absolute;
  top: 100%;
  right: -70px;
  width: max-content;
  text-align: center;
  background-color: white;
  border-radius: 5px;
  border: 1px solid gray;
  animation-name: opas;
  animation-duration: 2s;

}

@keyframes opas {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

.basket {
  position: relative;
}

.favorite {
  cursor: pointer;
}

.favorite_img {
  height: 25px;
  width: 25px;
}

.favorite__item {
  cursor: pointer;
}

.basket__number {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  z-index: 1001;
  font-size: 13px;
  background-color: black;
  color: whitesmoke;
  width: 17px;
  height: 17px;
  text-align: center;
  margin: 0, auto;
  right: 0;
  top: -5px;
}

.basket {
  cursor: pointer;
  position: relative;
  z-index: 5;
}

.header__items {
  padding: 10px 20px;
  background-color: rgba(160, 144, 144, 0.216);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  font-size: 18px;
  border-radius: 20px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  z-index: 99;

}

.header__items-links {
  display: flex;
  gap: 10px;
}

.header__items-profile {
  display: flex;
  gap: 15px;
}

a {
  color: rgb(37, 37, 37);
  font-weight: bolder;
}

a:hover {
  font-weight: bolder;
  color: rgb(6, 6, 6);
  box-shadow: 0px -8px 0px -5px rgba(0, 0, 0, 0.6) inset;
  transition: 0.3s;
}

img {
  width: 100px;
  height: 100px;
  border-radius: 10px;
}

.router-link-active {
  box-shadow: 0px -8px 0px -5px rgba(0, 0, 0, 0.6) inset;
}


@media (max-width: 790px) {

  .header__items-links {
    display: none;

  }

  .header__items {
    position: fixed;
    justify-content: start;
    gap: 20px;
    width: 100%;
    top: 0;
    right: 0;
    border-radius: 0px
  }

  img {
    width: 50px;
    height: 50px;
  }




}

@media (max-width: 430px) {
  .user__email{
    max-width: 80px;
    overflow: hidden;
  }
}

.header__items-profile {
  display: none;
}</style>