
<template>
  <div class="leftmenu">
    <ul class="sneakers_table">
      <h4 class="sneakers">Обувь</h4>
      <li class="sneakers_table-item">Adidas</li>
      <li class="sneakers_table-item">Nike</li>
      <li class="sneakers_table-item">New Balance</li>
      <li class="sneakers_table-item">Adidas</li>
    </ul>
    <ul class="sneakers_table">
      <h4 class="sneakers">Одежда</h4>
      <li class="sneakers_table-item">Adidas</li>
      <li class="sneakers_table-item">Nike</li>
      <li class="sneakers_table-item">New Balance</li>
      <li class="sneakers_table-item">Adidas</li>
    </ul>
  </div>
</template>

<style scoped>
.leftmenu {
  padding: 10px 10px;
  width: 15%;
  background-color: rgb(236 236 236);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 100%;
  align-items: center;
  -webkit-box-shadow: -5px -5px 5px -5px rgba(34, 60, 80, 0.6);
-moz-box-shadow: -5px -5px 5px -5px rgba(34, 60, 80, 0.6);
box-shadow: -5px -5px 5px -5px rgba(34, 60, 80, 0.6);
}
.sneakers_table {
  width: 100%;
  list-style: none;
  padding: 0;
  text-align: center;
}
.sneakers {
}
.sneakers_table-item {
  border: 1px solid black;
  border-radius: 10px;
  margin: 3px 2px;
}

li {
  transition: 0.3s;
}
li:hover {
  background-color: rgb(63, 65, 63);
  color: aliceblue;
}
@media (max-width:1060px) {
  .sneakers_table-item{
    padding: 3px 10px;
  }
}
</style>