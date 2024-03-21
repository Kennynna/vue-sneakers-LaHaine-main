<script setup>
import MainContent from './MainContent.vue'
</script>

<template>
  <main>
    <div class="main_content">
      <MainContent />
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
}
.left_content {
  width: 15%;
}
.main_content {
  margin-top: 20px;
  width: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
}
</style>