<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/auth';
import Message from 'primevue/message';
import { useRouter } from 'vue-router';
import ProgressSpinner from 'primevue/progressspinner';
import axios from 'axios';

const router = useRouter();
//косметический код (Тумблер для класса active  и v-if при регистрации либо входа)
const useRegister = ref(false)
const showReg = () => {
  useRegister.value = true
}
const showLog = () => {
  useRegister.value = false
}
const checkPassword = () => {
  if (password.value !== passwordChek.value) {
    warningPassword.value = true
  } else {
    warningPassword.value = false
  }
}

const authStore = useAuthStore()
//хранилище 
const email = ref('')
const password = ref('')
const passwordChek = ref('')
const warningPassword = ref(false)
const isRegister = ref(false)

const signUp = async () => {
  checkPassword()
  // Если пароли не совпадают, прекращаем выполнение функции
  if (warningPassword.value) {
    return;
  }
  //загрузка данных на наш бэк
  try {
    isRegister.value = true
    await authStore.auth({ email: email.value, password: password.value }, 'signUp')
    let user = {
      password:password.value,
      email:email.value
    }
    localStorage.setItem('userInfo', JSON.stringify(user))
    //сбрасывание ипутов
    email.value = ''
    password.value = ''
    passwordChek.value = ''
    //переводим пользователя в каталог
    setTimeout(() => {
      router.push('/catalog')
      //isRegister для того чтобы скрыть импуты и имитировать загрузку пока пользователь ждет
      isRegister.value = false
    }, 2000)
  } catch {
    alert('Не удалось загрузить данные на Mokki')
    isRegister.value = false
  }

  //перекидываем пользователя в каталог

}
const signIn = async () => {
  await authStore.auth({ email: email.value, password: password.value }, 'signInWithPassword')
  let user = {
    password: password.value,
    email: email.value
  }
  localStorage.setItem('userInfo', JSON.stringify(user))
  isRegister.value = true
  email.value = ''
  password.value = ''
  passwordChek.value = ''
  setTimeout(() => {
    isRegister.value = false
    router.push('/catalog')
  }, 2000)
}


</script>

<template>
  <div class="body__conent">

    <body>
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form v-if="!isRegister" class="auth flex flex-col justify-between " action="auth" @submit.prevent="signUp">
        <Message v-if="authStore.error" severity="error" :life="2000"> {{ authStore.error }} </Message>
        <div class="auth__block flex justify-between">
          <p @click="showLog" :class="{ active: !useRegister }" class="auth__text-reg shadow-md ">Вход</p>
          <p @click="showReg" :class="{ active: useRegister }" class="auth__text-log shadow-md ">Регистрация</p>
        </div>
        <h3>Введите данные</h3>
        <div class="flex flex-col gap-5">
          <input v-if="useRegister" type='tel' placeholder="Введите ваш телефон" />
          <input type="e-mail" v-model.trim="email" placeholder="Введите ваш email" />
          <input type="password" v-model="password" placeholder="Введите пароль" />
          <input v-if="useRegister" type="password" v-model="passwordChek" placeholder="Подтвердите  пароль" />
          <p v-if="warningPassword && useRegister" class="text-center" style="color: red;">Пароли не совпадают</p>
          <button v-if="useRegister" class="reg__btn" @click="signUp" label="Sign up">Зарегистрироваться</button>
          <button v-if="!useRegister" class="auth__btn" @click="signIn" label="Sign in">Войти</button>
          <p v-if="!useRegister" class="text-center font-medium">Не помню пароль</p>
        </div>
      </form>
      <div v-if="isRegister" class="loading font-bold from-slate-600 text-2xl  drop-shadow-md ">
        <p class="text-neutral-800">Подождите немного </p>
        <ProgressSpinner aria-label="Loading" style="height: 30px; width: 30px;" strokeWidth="7" />
      </div>
    </body>
  </div>
</template>

<style scoped>
.auth__block {
  margin-top: 10px;
}

.auth__text-log,
.auth__text-reg {
  padding: 10px 20px;
  background-color: rgba(255, 254, 254, 0.733);
  color: black;
  border-radius: 10px;
  font-weight: 900;
  cursor: pointer;
  transition: 0.3s;
  align-self: flex-end;
}

.auth__text-reg:hover,
.auth__text-log:hover {
  background-color: black;
  color: rgb(255, 255, 255)
}

.reg__btn,
.auth__btn {
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  width: max-content;
  align-self: center;
  padding: 10px 30px;
  font-size: 20px;
  font-weight: bold;
  align-content: end;
}

.auth__text {
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  color: white;
}

.loading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  background-color: rgba(255, 255, 255, 0.604);
  border-radius: 30px;
  padding: 10px 20px;
  backdrop-filter: blur(10px);
}

.auth {

  border-radius: 30px;


}

.body__conent {
  z-index: 1;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.216);
  border-radius: 20px;
}

input {
  text-align: center;
  padding: 10px 10px;
}

.active {
  background-color: black;
  color: white;
}

/*  */
*,
*:before,
*:after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: #080710;
}

.background {
  width: clamp(19.375rem, 16.648rem + 13.64vw, 26.875rem);
  height: 520px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
}

.background .shape {
  height: 200px;
  width: 200px;
  position: absolute;
  border-radius: 50%;
}

.shape:first-child {
  background: linear-gradient(#ffffff,
      #ffffff);
  left: -80px;
  top: -80px;
  animation: cicrle;
  animation-duration: 20s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  will-change: cicrle;
}

@keyframes cicrle {
  0% {
    left: -80px;
    top: -80px;
  }

  50% {
    left: 300px;
    top: 300px;
  }

  100% {
    left: -80px;
    top: -80px;
  }
}


.shape:last-child {
  background: linear-gradient(to right,
      #454141,
      #000000);
  right: clamp(-1.875rem, -3.239rem + 6.82vw, 1.875rem);
  bottom: -80px;
  animation: cicrle1;
  animation-duration: 20s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  will-change: cicrle1;
}

@keyframes cicrle1 {
  0% {
    right: -30px;
    bottom: -80px;
  }

  50% {
    right: 300px;
    bottom: 300px;
  }

  100% {
    right: -30px;
    bottom: -80px;
  }
}

form {
  font-weight: bold;
  width: clamp(18.75rem, 11.932rem + 34.09vw, 37.5rem);
  background-color: rgba(255, 255, 255, 0.13);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 10px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px clamp(-5rem, -10.227rem + 26.14vw, 9.375rem)
}

form * {

  color: #000000;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
}

form h3 {
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
}

label {
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
}

input {
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgb(133 133 133 / 77%);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-weight: bold;
}

::placeholder {
  color: #ffffff;
  font-weight: 800;
}

button {
  margin-top: 50px;
  width: 100%;
  background-color: #ffffff;
  color: #080710;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
}

.social {
  margin-top: 30px;
  display: flex;
}

.social div {
  background: red;
  width: 150px;
  border-radius: 3px;
  padding: 5px 10px 10px 5px;
  background-color: rgba(255, 255, 255, 0.27);
  color: #eaf0fb;
  text-align: center;
}

.social div:hover {
  background-color: rgba(255, 255, 255, 0.47);
}

.social .fb {
  margin-left: 25px;
}

.social i {
  margin-right: 4px;
}

@media (max-width: 790px) {
  .shape:first-child {
    animation-name: none;
  }

  .shape:last-child {
    animation-name: none;
    bottom: 150px;
    right: 10px;
  }

  form {
    top: 30%
  }
}
</style>