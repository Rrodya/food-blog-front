<template>
  <div class="recipe-item" :class="{'recipe-item_small': !isSmall}">
    <div class="recipe-item__image">
      <img src="../assets/main.png" alt="">
    </div>
    <div class="recipe-item__info">
      <p class="recipe-item__info-title font-sub-title">{{item.name}}</p>
      <p class="recipe-item__info-desc form-tiny-text">{{item.description}}</p>
      <div class="recipe-item__info-tags" v-if="item.category">
        <p class="recipe-item__info-tags-item form-tiny-text" v-for="(itemCategory, index) in item.category" :key="index"><span v-if="itemCategory.title">{{itemCategory.title}}</span></p>
      </div>
    </div>
    <v-svg @click="clickItem" class="recipe-item__arrow" name="arrow-right"></v-svg>
  </div>
</template>

<script setup>
import {defineProps, defineEmits, onMounted } from "vue"
import VSvg from "@/components/v-svg.vue"
import axios from "axios";
import LINK from "@/api/link";


const emit = defineEmits(['handle'])

function clickItem() {
    emit("handle", {itemId: props.item._id})
}



const props = defineProps({
  isSmall: {
    type: Boolean,
    required: false,
    default: true
  },
  itemInfo: {
    type: String,
    required: false,
    default: ""
  },
  item: {
    type: Object,
    required: true
  }
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

.recipe-item_small {
  width: 45%;
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
