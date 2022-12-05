<template>
  <div class="recipe-item">
    <div class="recipe-item__image">
      <img src="../assets/main.png" alt="">
    </div>
    <div class="recipe-item__info">
      <p class="recipe-item__info-title font-sub-title">Рыба с овощами на пару</p>
      <p class="recipe-item__info-desc form-tiny-text">Приготовим филе лосося в сливочном соусе на гриле с овощами на пару...</p>
      <div class="recipe-item__info-tags">
        <p class="recipe-item__info-tags-item form-tiny-text">Морепродукты</p>
        <p class="recipe-item__info-tags-item form-tiny-text">Гриль</p>
      </div>
    </div>
    <v-svg class="recipe-item__arrow" name="arrow-right"></v-svg>
  </div>
</template>

<script setup>
import {defineProps} from "vue"
import VSvg from "@/components/v-svg.vue"


const props = defineProps({
  isSmall: {
    type: Boolean,
    required: false,
    default: true
  },
  itemInfo: Object
})
</script>

<style>
.recipe-item {
  width: 32%;
  border-radius: 20px;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
  background-color: #FFFFFF;
  position: relative;
}

.recipe-item__arrow {
  position: absolute;
  bottom: 10px;
  right: 20px;
}

.recipe-item__image {
  width: 100%;
  overflow: hidden;
}

.recipe-item__image img {
  width: 120%;
}

.recipe-item__info {
  padding: 15px 20px;
}

.recipe-item__info-tags p {
  font-weight: 600;
}

.recipe-item__info-desc {
  margin-top: 10px;
}

.recipe-item__info-tags-item:not(:last-child) {
  padding-right: 7px;
}

.recipe-item__info-tags {
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
}
</style>
