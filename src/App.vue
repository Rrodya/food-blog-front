<template>
  <div class="app">
    <v-header></v-header>
    <router-view/>
    <v-footer></v-footer>
  </div>
</template>

<script setup>
import VHeader from "@/templates/v-header.vue"
import VFooter from "@/templates/v-footer.vue"

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;600;700&family=Poppins:ital,wght@0,200;0,300;1,100;1,200&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Comfortaa', cursive;
  font-size: 16px;
  font-weight: 500;
}

.container {
  width: 1200px;
  margin: 0 auto;
}

.font-title {
  font-size: 24px;
}

.font-s-title {
  font-size: 18px;
}

.font-sub-title {
  font-size: 16px;
}

.form-tiny-text {
  font-size: 12px;
}


</style>
