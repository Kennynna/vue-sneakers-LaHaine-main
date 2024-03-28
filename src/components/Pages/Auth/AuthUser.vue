<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/auth';
//косметический код (Тублер для класса active  и v-if при регистации либо входа)
const useRegister = ref(false)
const showReg = () => {
  useRegister.value = true
}
const showLog = () => {
  useRegister.value = false
}

const authStore = useAuthStore()

//лоигка авторизации
const email = ref('')
const password = ref('')

const signUp = async () => {
  await authStore.signup({email: email.value, password: password.value})
}
</script>

<template>
  <div class="body__conent">
    <form class="auth flex flex-col justify-between " action="auth" @submit.prevent="signUp">
      <div class="auth__block flex justify-between">
        <p @click="showLog" :class="{ active: !useRegister }" class="auth__text-reg shadow-md ">Вход</p>
        <p @click="showReg" :class="{ active: useRegister }" class="auth__text-log shadow-md ">Регистация</p>
      </div>
      <div class="div flex flex-col gap-5">
        <input v-if="useRegister" type="number" placeholder="Введите ваш телефон">
        <input type="e-mail" v-model="email" placeholder="Введите ваш email">
        <input type="password" v-model="password" placeholder="Введите пароль">
        <input v-if="useRegister" type="password" placeholder="Подтвердите  пароль">
      </div>
      <button v-if="useRegister" class="reg__btn" @click="signUp" type="submit">13:00</button>
      <button v-if="!useRegister" class="auth__btn" label="Sinh up">Вход</button>
      <p v-if="!useRegister" class="text-center font-medium">Не помню пароль</p>
    </form>
  </div>
</template>

<style scoped>
.auth__text-log,
.auth__text-reg {
  padding: 10px 20px;
  background-color: aliceblue;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  align-self: flex-end;
}

.auth__text-reg:hover,
.auth__text-log:hover {
  background-color: black;
  color: white
}

.reg__btn,
.auth__btn {
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  width: max-content;
  align-self: center;
  padding: 10px 30px;
  font-size: 20px;
  font-weight: 800;
  align-content: end;
}

.auth__text {
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  color: white;
}

.auth {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 600px;
  height: 500px;
  background-color: rgba(128, 128, 128, 0.604);
  border-radius: 30px;
  padding: 10px 20px;
  backdrop-filter: blur(10px);

}

.body__conent {
  z-index: 1;
  margin-top: 30px;
  background: url(https://media.istockphoto.com/vectors/sneakers-shoes-seamless-pattern-vector-background-vector-id656954204?k=20&m=656954204&s=170667a&w=0&h=huzff3fzE0rID-z9bDOCKPgyN6Xg3PQdS2ZZqcv1Sqs=);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.31);
  border-radius: 20px;
}

input {
  text-align: center;
  padding: 10px 10px;
  border-radius: 10px;
  font-weight: 600;
}

.active {
  background-color: black;
  color: white;
}
</style>