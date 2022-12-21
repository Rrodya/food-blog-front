<template>
  <div class="blog-page">
    <section class="inter-category">
      <div class="container">
        <h2 class="inter-category__header sub-header">Интересные категории</h2>
        <div class="inter-category__list">
          <v-button
            class="inter-category__list-item"
            v-for="item in category"
            :key="item"
            :is-border="true"
            :text="item.name"></v-button>
        </div>
      </div>
    </section>
    <section class="popular-artical">
      <div class="container">
        <h1 class="popular-artical__header sub-header">Популярные статьи</h1>
      </div>
      <div class="popular-artical__content gray-content" v-if="forumItems">
        <div class="container">
          <div class="popular-artical__list">
            <forum-item
              v-for="item in popularForumItems"
              :key="item"
              :item="item"
              @handle="clickForumItem"
            ></forum-item>
          </div>
        </div>
      </div>
    </section>
    <section class="new-artical">
      <div class="container">
        <h1 class="new-artical__header sub-header">
          Новое для обсуждения
        </h1>
      </div>
      <div class="new-artical__content gray-content" v-if="forumItems">
        <div class="container">
          <div class="new-artical__list">
            <forum-item
              v-for="item in forumItems.slice(0, 3)"
              class="new-artical__list-item"
              :key="item"
              :item="item"
              @handle="clickForumItem"
            ></forum-item>
          </div>
        </div>
      </div>
    </section>
    <section class="all-artical">
      <div class="container">
        <h2 class="all-artical__header sub-header">Все статьи</h2>
        <div class="all-artical__list">
          <v-button
            class="all-artical__list-item"
            v-for="item in 7"
            :key="item"
            :is-border="true"
            text="Домашняя кухня"></v-button>
        </div>
      </div>
      <div class="gray-content" v-if="forumItems">
        <div class="container">
          <div class="all-artical__list">
            <forum-item
              v-for="item in forumItems.slice(0, countArticles)"
              class="new-artical__list-item"
              :key="item"
              :item="item"
              @handle="clickForumItem"
            ></forum-item>
          </div>
          <v-button class="all-artical__download-more" :is-border="true" text="Загрузить еще" @clickHandle="handleClick"></v-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import VButton from "@/components/v-button.vue";
import ForumItem from "@/components/forum-item.vue"
import {useRouter} from "vue-router"
import {computed, onMounted, ref} from "vue";
import axios from "axios";
import LINK from "@/api/link";


const router = useRouter();
const forumItems = ref();
const countArticles = ref(3)
const category = ref();



onMounted(() => {
  axios.get(LINK + "forum").then((res) => {
    if(res.status === 200) {
      if(res.data) {
        forumItems.value = res.data;
        console.log(forumItems.value);
      }
    }
  });

  axios.get(LINK + "category").then((res) => {
    if(res.status === 200) {
      if(res.data) {
        category.value = res.data;
        console.log(category.value);
      }
    }
  });
})

const clickForumItem = (item) => {
  console.log(item.itemId);
  router.push({path: `/blog/${item.itemId}`})
}

const popularForumItems = computed(() => {
  console.log()
  if(forumItems.value) {
    let popRecipe = forumItems.value.filter((item) => item.isPopular)
    return popRecipe.slice(0, 3);
  } return {}
})


function handleClick() {
  countArticles.value += 3;
  console.log(countArticles.value);
}
</script>

<style scoped>
.inter-category__header, .all-artical__header {
  padding-bottom: 50px;
}

.inter-category__list-item:not(:last-child), .all-artical__list-item:not(:last-child) {
  margin-right: 10px;
  margin-bottom: 20px;
}

</style>
