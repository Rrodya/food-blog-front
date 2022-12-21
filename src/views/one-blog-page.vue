<template>
  <div class="one-blog-page">
    <div class="gray-content" v-if="forumItem">
      <div class="container">
        <h2 class="one-blog-page__header font-header">
          {{forumItem.title}}
        </h2>
        <p class="one-blog-page__sub-title font-sub-title">
          {{forumItem.description}}
        </p>
        <v-button class="one-blog-page__send-message-btn" text="Написать сообщение"></v-button>
      </div>
    </div>
    <div class="container">
      <div class="one-blog-page__messages">
        <h2 class="one-blog-page__messages-header font-header">
          Сообщения
        </h2>
        <div class="one-blog-page__messages-list">
          <one-message class="one-blog-page__messages-list-item" v-for="item in forumItem.messages" :key="item" :message="item"></one-message>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import VButton from "@/components/v-button.vue"
import OneMessage from "@/components/one-message.vue"
import {defineProps, onBeforeMount, onMounted, ref} from "vue";
import axios from "axios";
import LINK from "@/api/link";

const forumItem = ref(false);
const idItem = ref();

const props = defineProps({
  item: Object
})



onBeforeMount(() => {
  let currentURL = (document.URL);
  idItem.value = currentURL.split("/")[5];
})

onMounted(() => {
  console.log(Object);
  axios.get(LINK + "forum").then((res) => {
    if (res.status === 200) {
      if (res.data) {
        let recip = res.data.filter(item => item._id === idItem.value)
        forumItem.value = recip[0];
        console.log(recip);
      }
    }
  });
})
</script>

<style>
.one-blog-page {
  font-family: 'Poppins', sans-serif;
}

.one-blog-page__messages-header {
  margin-top: 30px;
}

.one-blog-page__sub-title {
  margin-top: 20px;
}

.one-blog-page__send-message-btn {
  margin-top: 40px;
}

.one-blog-page__messages-list {
  margin-top: 20px;
}

.one-blog-page__messages-list-item {
  padding-top: 20px;
}
</style>
