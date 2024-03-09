<script setup>
import Leftcontent from './Leftcontent.vue'
import CatalogItems from './CatalogItems.vue'
import axios from 'axios';
import { onMounted, ref} from 'vue';
const items = ref([])
onMounted(async()=>{
  try {
    const {data} = await axios.get('https://52229c9522e6c31a.mokky.dev/items')
    items.value= data
  } catch (e) {
    alert(e)
  }
})
</script>





<template>
  <div class="container__catalog">
    <Leftcontent />
    <div class="item__catalog">
      <CatalogItems 
      v-for="item in items"
      :key="item.id"
      :title="item.title"
      :price="item.price"
      :size="item.size"
      :imgUrl="item.imgUrl"
      :id="item.id"
      />
    </div>
  </div>
</template>

<style scoped>
.container__catalog {
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
  
}
.item__catalog{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1px;
  flex-grow: 1;
  flex-shrink: 100;
  justify-content: space-between;
  background-color: rgb(236 236 236);
  border-radius: 20px;
  padding: 20px 20px;

}
</style>