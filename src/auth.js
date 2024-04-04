import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

const apiKey = 'AIzaSyC4ILo7geI-DDFaueUBGjsCMbw9daUGfCs'
export const useAuthStore = defineStore('auth', () => {
    const userInfo = ref({
        token: '',
        email: '',
        userId: '',
        refreshToken: '',
        expireIn: '',
    })
    const isAuthenticated = ref(false)
    const error = ref('')
    const loader = ref(false)
    const auth = async (payload, type) => {
        const stringUrl = type === 'signUp' ? 'signUp' : 'signInWithPassword';
        loader.value = true
        try {
            let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:${stringUrl}?key=${apiKey}`, {
                ...payload,
                returnSecureToken: true
            });
            userInfo.value = {
                token: response.data.idToken,
                email: response.data.email,
                userId: response.data.localId,
                refreshToken: response.data.refreshToken,
                expireIn: response.data.expiresIn,
            }
            console.log(userInfo.value)
            isAuthenticated.value = true
        } catch (err) {
            isAuthenticated.value = false
            console.log(err.response.data.error.message)
            switch (err.response.data.error.message) {
                case 'EMAIL_EXISTS':
                    error.value = 'Email уже зарегистрирован';
                    break;
                case 'OPERATION_NOT_ALLOWED':
                    error.value = 'Operation not allowed';
                    break;
                case 'EMAIL_NOT_FOUND':
                    error.value = 'Email  не найден';
                    break;
                case 'INVALID_PASSWORD':
                    error.value = 'Неверный пароль';
                    break;
                case 'USER_DISABLED':
                    error.value = 'Пользователь удален администратором';
                    break;
                case 'INVALID_LOGIN_CREDENTIALS':
                    error.value = 'Неверные учетные данные для входа';
                    break;
                default:
                    error.value = 'Error'
                    break;
            }
            loader.value = false
            throw error.value
        }
    }
    console.log(userInfo.value)
    return { auth, userInfo, error, isAuthenticated }

})

