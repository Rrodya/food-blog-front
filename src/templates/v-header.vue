<template>
  <div class="container">
    <div class="v-header">
        <v-svg class="v-header-logo" name="logo"/>
        <ul class="v-header-item__nav-list">
          <li class="v-header-item__nav-list-item"><router-link to="/">Главная</router-link></li>
          <li class="v-header-item__nav-list-item"><router-link to="blog">Блог</router-link></li>
          <li class="v-header-item__nav-list-item"><router-link to="">Рецепты</router-link></li>
          <v-svg class="v-header-item__nav-list-search" name="search"/>
        </ul>
        <div class="v-header-item__auth">
          <v-button class="v-header-auth" text="Войти"/>
          <v-button class="v-header-register" text="Регистрация" :isBorder="true"/>
        </div>
    </div>
  </div>
</template>

<script setup>
import VSvg from "@/components/v-svg.vue"
import VButton from "@/components/v-button.vue";


</script>

<style>
.v-header {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  align-items: center;
}

.v-header-logo {
  display: flex;
  align-items: center ;
}

.v-header-item__nav-list {
  display: flex;
  justify-content: space-between;
  width: 30%;
}

.v-header-item__nav-list li {
  list-style: none;
  display: flex;
  align-items: center;
}

.v-header-item__nav-list-search {
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #96DC14;
}

.v-header-auth {
  margin-right: 35px;
}
</style>
