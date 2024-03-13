<script >
export default {
 props: ['closeForm'],
 // Закрытие формы
}


</script>


<template>

<div class="userForm active" ref="FormActive">
        <button @click="closeForm" class="userForm__closed-btn">X</button>
        <div class="userFrom__text">
            <p>Отправление заявки на покупку</p>
        </div>
        <form action="form" class="userForm__form">
            <input type="text" name="name" placeholder="Имя">
            <input type="text" name="name" placeholder="Фамилия">
            <input type="email" name="email" placeholder="Email">
            <input type="tel" name="number" placeholder="+7(123)456-78-90">
            <input type="text" name="number" placeholder="Адрес доставки или пункта">
        </form>
        <div class="userFrom__btn">
            <button>Отправить заявку</button>
            <button @click="closeForm">выйти</button>
        </div>
    </div>
</template>

<style scoped>
.userForm{
    display: none;
}

.userForm.active{
    display: block;
    position: absolute;
    z-index: 10;
    max-width: 500px;
    max-height: 500px;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgb(56, 56, 56);
    color: white;
    border-radius: 10px;
    padding: 5px 20px;
    text-align: center;
}
.userFrom__btn{
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    gap: 10px;
    justify-content: space-between;
}

input{
    border-radius: 5px;
    width: clamp(12.5rem, 7.955rem + 22.73vw, 25rem);
    height: 40px;
}

.userForm__form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.userFrom__text{
    font-size: clamp(1rem, 0.818rem + 0.91vw, 1.5rem);
    font-weight: bold;
}

button{
    padding: 5px 10px;
    border-radius: 10px;
    border: none;
    text-transform: uppercase;
    text-align: center;
    font-weight: 600;
    transition: 0.3s;
}

button:hover{
    background-color: rgba(14, 225, 74, 0.649);
    color: white;

}

.userForm__closed-btn {
    position: absolute;
    right: 0; /* Отступ от правого края */
    top: 0; /* Отступ от верхнего края */
    background-color: red;
    
    height: 30px;
    width: 30px;
}
</style>