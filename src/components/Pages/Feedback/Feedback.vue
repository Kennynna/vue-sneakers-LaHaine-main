<template>
  <div class="card-container">
    <div class="card" v-for="(card, index) in cards" :key="index">
      <div class="card-header">
        <img :src="card.icon" alt="Icon">
        <h2>{{ card.title }}</h2>
      </div>
      <div class="card-body">
        <p>{{ card.description }}</p>
        <ul class="card-features">
        </ul>
      </div>
      <div class="card-footer">
        <button class="card-button">{{ card.buttonLabel }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          icon: "https://cdn.jsdelivr.net/npm/vue-material-design-icons@2.3.1/src/icons/payment/credit-card-outline.svg",
          title: "Платежи сразу",
          description: "Подключение к сервису за 1-3 дня",
          features: [
            "Даже без интеграции с онлайн-магазином вы можете отправлять клиентам платежные ссылки или счета через личный кабинет",
            "Автоматическое заполнение документов и помощь персонального менеджера",
            "Ставка от 1%",
            "Средства придут на следующий рабочий день после транзакции",
            "Выгодная комиссия для вашего вида бизнеса",
          ],
          buttonLabel: "Узнать больше",
        },
        {
          icon: "https://cdn.jsdelivr.net/npm/vue-material-design-icons@2.3.1/src/icons/content/file-upload.svg",
          title: "Загрузка документов",
          description: "Быстро, просто и безопасно",
          features: [
            "Загружайте любые документы в личном кабинете",
            "Отслеживайте статус обработки документов",
            "Получайте уведомления о готовности документов",
            "Храните документы в безопасном месте",
          ],
          buttonLabel: "Загрузить документы",
        },
        {
          icon: "https://cdn.jsdelivr.net/npm/vue-material-design-icons@2.3.1/src/icons/action/report.svg",
          title: "Отчетность",
          description: "Доступ к статистике в любой момент",
          features: [
            "Просматривайте историю платежей и загрузок",
            "Формируйте отчеты по различным параметрам",
            "Экспортируйте отчеты в Excel",
            "Получайте отчеты на email",
          ],
          buttonLabel: "Смотреть отчеты",
        },
      ],
    };
  },
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px;
}

.card {
  width: 300px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.card-header img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.card-header h2 {
  margin: 0;
  font-size: 18px;
}

.card-body {
  margin-bottom: 10px;
}

.card-features {
  list-style: none;
  padding: 0;
}

.card-features li {
  margin-bottom: 5px;
}

.card-footer {
  text-align: center;
}

.card-button {
  background-color: #007bff
}
</style>