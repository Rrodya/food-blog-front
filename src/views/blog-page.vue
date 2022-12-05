<template>
  <div class="blog-page">
    <section class="inter-category">
      <div class="container">
        <h2 class="inter-category__header sub-header">Интересные категории</h2>
        <div class="inter-category__list">
          <v-button
            class="inter-category__list-item"
            v-for="item in 7"
            :key="item"
            :is-border="true"
            text="Домашняя кухня"></v-button>
        </div>
      </div>
    </section>
    <section class="popular-artical">
      <div class="container">
        <h1 class="popular-artical__header sub-header">Популярные статьи</h1>
      </div>
      <div class="popular-artical__content gray-content">
        <div class="container">
          <div class="popular-artical__list">
            <forum-item v-for="item in 3" :key="item"></forum-item>
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
      <div class="new-artical__content gray-content">
        <div class="container">
          <div class="new-artical__list">
            <forum-item class="new-artical__list-item" v-for="item in 3" :key="item"></forum-item>
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
      <div class="gray-content">
        <div class="container">
          <div class="all-artical__list">
            <forum-item v-for="item in 3" :key="item" class="all-artical__list-item"></forum-item>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import VButton from "@/components/v-button.vue";
import ForumItem from "@/components/forum-item.vue"
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
