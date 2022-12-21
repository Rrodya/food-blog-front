<template>
  <div class="forum-item">
    <div class="forum-item__forum-head">
      <p class="forum-head__title font-s-title">{{item.title}}</p>
      <div class="forum-head__tags">
        <p class="forum-head__tags-item form-tiny-text">Морепродукты</p>
        <p class="forum-head__tags-item form-tiny-text">Гриль</p>
        <p class="forum-head__tags-item form-tiny-text">Мясо</p>
        <p class="forum-head__tags-item form-tiny-text">Домашняя кухня</p>
      </div>
    </div>
    <p class="forum-item__desc font-sub-title">{{item.description}}</p>
    <v-svg @click="clickItem" class="forum-item__arrow" name="arrow-right"></v-svg>
  </div>
</template>

<script setup>
import VSvg from "@/components/v-svg.vue"
import {defineProps, defineEmits, onMounted} from "vue";

const props = defineProps({
  item: Object
})

const emit = defineEmits(['handle'])

function clickItem() {
  emit("handle", {itemId: props.item._id});
}
</script>

<style>
.forum-item {
  border-radius: 20px;
  background-color: #ffffff;
  font-family: 'Poppins', sans-serif;
  padding: 28px 20px 56px;
  position: relative;
}

.forum-item__arrow {
  position: absolute;
  bottom: 13px;
  right: 20px;
}

.forum-head__tags {
  display: flex;
  align-items: center;
  margin-left: 20px;
}

.forum-head__tags-item {
  font-weight: 600;
}

.forum-head__tags-item:not(:last-child) {
  padding-right: 7px;
}

.forum-item__forum-head {
  display: flex;
  border-bottom: 1px solid #000000;
}

.forum-item__desc {
  margin-top: 20px;
}
</style>
