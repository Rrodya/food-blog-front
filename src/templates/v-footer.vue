<template>
  <div class="container">
    <div class="v-footer">
        <nav class="v-footer__nav">
          <v-svg class="v-footer-logo" name="logo"></v-svg>
          <ul class="v-footer__nav-list">
            <li class="v-footer__nav-list-item"><router-link to="">Главная</router-link></li>
            <li class="v-footer__nav-list-item"><router-link to="">Блог</router-link></li>
            <li class="v-footer__nav-list-item"><router-link to="">Рецепты</router-link></li>
          </ul>
        </nav>
        <div class="v-footer__soc">
          <v-button class="v-footer__soc-donate" text="Donate"></v-button>
          <v-button class="v-footer__soc-twitter" text="Мы в Твиттере"></v-button>
        </div>
    </div>
  </div>
</template>

<script setup>
import VSvg from "@/components/v-svg.vue"
import VButton from "@/components/v-button.vue"

</script>

<style>
.v-footer {
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
  border-top: 2px solid #96DC14;
}

.v-footer__nav {
  display: flex;

}

.v-footer__nav-list {
  list-style: none;
  display: flex;
  margin-left: 60px;
}

.v-footer__nav-list li {
  display: flex;
  align-items: center;
  margin-right: 50px;
}

.v-footer__soc-donate {
  margin-right: 40px;
}
</style>
