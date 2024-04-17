<template>
    <div class="about">
        <h2 class="about__head">О нас</h2>
        <div class="abut__text">
            <p class="about__desc mt-10">
                La Haine — это сеть мультибрендовых магазинов обуви, одежды и аксессуаров от мировых спортивных и
                лайфстайл брендов: adidas Originals, Reebok, PUMA, New Balance, Nike, Vans, Converse, Dr. Martens, UGG,
                Timberland.
            </p>

            <p class="about__desc mt-10">
                У нас можно найти классические модели кроссовок и кед, обувь, вдохновленную ярким образом жизни и
                разнообразными видами спорта. А также одежду, стильные аксессуары, средства для чистки и защиты ваших
                любимых пар.
            </p>
            <h2 class="about__head mt-10">Доверие</h2>
            <ul class="mt-10">
                <li>Работаем с 2016 года</li>
                <li>100% оригинальные товары</li>
                <li>1000+ отзывов о магазине на разных платформах</li>
                <li>Регулярное обновление ассортимента</li>
                <li>Скидки постоянным клиентам</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.about{
    min-height: 70vh;
}
.about__head{
    text-align: start;
    font-size: clamp(1rem, 0.568rem + 2.16vw, 2.188rem);
}
.about__desc{
    max-width: 60%;
}

@media (max-width:760px) {
.about__desc {
        max-width: 90%;
    }
}
</style>