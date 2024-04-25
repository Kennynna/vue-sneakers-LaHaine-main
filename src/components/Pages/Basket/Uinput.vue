<script>
import axios from 'axios';
export default {
    props: {
        closeForm: Function,
        OrderArray: Array,
        email: String,
        price: Number
    },
    setup(props) {
        const data = {
            name: "",
            surname: "",
            email: props.email,
            number: "",
            adres: "",
            data: "",
        };
        const inputHandler = (e, fieldName) => {
            data[fieldName] = e.target.value;
        };
        const AddOrder = async (itemId) => {
            try {
                const orderData = {
                    name: data.name,
                    surname: data.surname,
                    email: props.email,
                    number: data.number,
                    adres: data.adres,
                    OrderArray: props.OrderArray, // используем переданный prop OrderArray
                    date: new Date().toISOString(),
                    itemId: itemId,
                    checked: false,
                    totalPrice: (Number(props.price) - Number(props.price) / 100 * 10)
                };
                // Определите идентификаторы товаров для удаления
                // Отправка заказа
                await axios.post(`https://52229c9522e6c31a.mokky.dev/orders/`, orderData)
                alert('Заказ успешно отправлен');
                props.closeForm();
            } catch (error) {
                console.error('Ошибка при заказе товара:', error);
            }
            
        };
        return { data, inputHandler, AddOrder };
        
    },

}

</script>



<template>

    <div class="userForm active" ref="FormActive">
        <div class="userFrom__text">
            <p>Отправление заявки на покупку</p>
        </div>
        <form action="form" class="userForm__form">
            <input type="text" name="name" placeholder="Имя" @input="inputHandler($event, 'name')" :value="name" />
            <input type="text" name="surname" placeholder="Фамилия" @input="inputHandler($event, 'surname')"
                :value="surname" />
            <input type="text" disabled name="email" placeholder="Email" @input="inputHandler($event, 'email')"
                :value="email" />
            <input type="text" name="number" placeholder="+7(123)456-78-90" @input="inputHandler($event, 'number')"
                :value="number" />
            <input type="text" name="adres" placeholder="Адрес доставки или пункта"
                @input="inputHandler($event, 'adres')" :value="adres" />
            <!-- ... -->

        </form>
        <div class="userFrom__btn">
            <button @click="AddOrder">Отправить заявку</button>
            <button @click="closeForm">Отмена</button>
        </div>

    </div>
</template>

<style scoped>
.userForm {
    display: none;
}

.userForm.active {
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

.userFrom__btn {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    gap: 10px;
    justify-content: space-between;
}

input {
    border-radius: 5px;
    width: clamp(12.5rem, 7.955rem + 22.73vw, 25rem);
    height: 40px;
    color: black;
    text-align: center;
}

.userForm__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.userFrom__text {
    font-size: clamp(1rem, 0.818rem + 0.91vw, 1.5rem);
    font-weight: bold;
}

button {
    padding: 5px 10px;
    border-radius: 10px;
    border: none;
    text-transform: uppercase;
    text-align: center;
    font-weight: 600;
    transition: 0.3s;
}

button:hover {
    background-color: rgba(14, 225, 74, 0.649);
    color: white;

}

.userForm__closed-btn {
    position: absolute;
    right: 0;
    /* Отступ от правого края */
    top: 0;
    /* Отступ от верхнего края */
    background-color: red;

    height: 30px;
    width: 30px;
}
</style>