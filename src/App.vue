<script setup>
import HeaderVue from './components/Pages/Home/Header.vue'
import { ref, onMounted } from 'vue'
import { useAuthStore } from './auth'; // Путь к вашему файлу auth.js может отличаться
import Footer from './components/Footer.vue';
const authStore = useAuthStore();

const isAdmin = ref(false)
const User = ref({})
//Данные юзера из auth
onMounted(() => {
  const storedUserInfo = localStorage.getItem('userInfo');
  if (!storedUserInfo) {
    return;
  } else if (storedUserInfo) {
    User.value = JSON.parse(storedUserInfo); // Загружаем информацию о пользователе из localStorage
    const signUp = async () => {
      //загрузка данных на наш бэк
      try {
        console.log(User.value.email)
        if(User.value.email === "kennynna7@mail.ru"){
          isAdmin.value = true
        } else {
          isAdmin.value = false
        }
        await authStore.auth({ email: User.value.email, password: User.value.password }, 'signInWithPassword')
      } catch {
        console.log('qwe')
      }
    }
    signUp()
  }
  console.log(isAdmin.value)
});



// Создаем вычисляемое свойство для доступа к email пользователя

// Создаем переменную состояния для отслеживания видимости мобильного меню
const isMobileMenuVisible = ref(false)

// Функция для переключения видимости мобильного меню
const toggleMobileMenu = () => {
  isMobileMenuVisible.value = !isMobileMenuVisible.value
}

</script>

<template>
  <div class="content" :class="{ 'no-scroll': isMobileMenuVisible }">
    <div class="mobnav" :class="{ 'mobnav-active': isMobileMenuVisible }" @click="toggleMobileMenu">
      <span class="spannav1"></span>
      <span class="spannav2"></span>
      <span class="spannav3"></span>
    </div>
    <div class="mob_header text-slate-200" v-show="isMobileMenuVisible">
      <div class="header__items-profile">
      </div>
      <router-link class="header__link-item  " to="/" @click="toggleMobileMenu">Главная</router-link>
      <router-link class="header__link-item  " to="/about" @click="toggleMobileMenu">О нас</router-link>
      <router-link class="header__link-item  " to="/catalog" @click="toggleMobileMenu">Каталог</router-link>
      <router-link class="header__link-item  " to="/contacts" @click="toggleMobileMenu">Контакты</router-link>
    </div>
    <HeaderVue :email="authStore.userInfo.email" :exit="authStore.exitUser" :admin="isAdmin" />
    <router-view></router-view>
    <Footer></Footer>

  </div>
</template>

<style scoped>
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
  height: 25px;
  position: fixed;
  cursor: pointer;
  z-index: 101;
  margin: 0;
  padding: 0;
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
  padding: 0 20px;
}


@media (max-width: 790px) {
  .content {
    margin-top: 120px;
  }

  .mob_header {
    margin: 0;
    display: flex;
    position: fixed;
    top: 0;
  }

  .mobnav {
    display: block;
    top: 25px;
    right: 30px;
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

  .header__link-sign,
  .header__link-registr {
    background-color: white;
    color: rgb(0, 0, 0);
    margin: 0 10px;

    margin-top: 20px;
    padding: 5px 5px;
    border-radius: 10px;
  }

  .header__link-item {
    text-align: center;
    height: 50px;
    font-size: 23px;
    background-color: rgb(255, 255, 255);
    color: black;
    border: 5px solid black;
    font-weight: 300;
  }
}
</style>