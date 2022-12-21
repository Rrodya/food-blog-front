<template>
  <div class="one-message">
    <div class="one-message__body">
      <div class="one-message__author">
        <div class="author__image">
          <img src="../assets/main.png" alt="">
        </div>
        <div class="author__info">
          <p class="author__info-name font-sub-title">
            {{message.name}}
          </p>
          <p class="author__info-articles font-sub-title">
            {{message.countArticles}} articles
          </p>
        </div>
      </div>
      <div class="line"></div>
      <div class="one-message__message">
        <p class="one-message__message-text font-sub-title">
          {{message.message}}
        </p>
      </div>
    </div>
    <div class="one-message__reply-btn">
      <v-button text="Ответить"></v-button>
    </div>
    </div>

</template>

<script setup>
import VButton from "@/components/v-button.vue"
import {defineProps} from "vue";

const props = defineProps({
  message: Object
})
</script>

<style>
.one-message__body {
  border-radius: 20px;
  width: 100%;
  border: 1px solid #000000;
  display: flex;
  justify-content: space-between;
  padding: 22px 20px
}
.one-message__author {
  display: flex;
  justify-content: space-around;
  width: 20%;
}

.author__image {
  width: 60px;
  height: 60px;
  border-radius: 100px;
  overflow: hidden;
}

.author__image img {
  max-width: 100%;
}

.author__info-name {
  font-size: 14px;
  font-weight: 700;
}

.line {
  width: 2px;
  background-color: black;
}

.one-message__message {
  padding: 0 10px;
}

.one-message__reply-btn {
  margin-top: 15px;
}
</style>
