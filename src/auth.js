import { defineStore } from 'pinia'
import axios from 'axios'


const apiKey = 'AIzaSyC4ILo7geI-DDFaueUBGjsCMbw9daUGfCs'
export const useAuthStore = defineStore('auth', () =>{ 
    const signup = async(payload)=>{
        try{
            let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,{
            ...payload,
            returnSecureToken: true
        });
            console.log(response.data)
        } catch(err){
            console.log(err.response)
        }
    }
    return{signup}
})