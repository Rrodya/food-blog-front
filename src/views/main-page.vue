<template>
  <div class="main-page">
    <section class="main-page__main-section main-section">
      <div class="container main-section__container">
        <div class="main-section__img">
          <img src="../assets/main.png" alt="nope">
          <div class="main-section__text">
            <div class="main-section__text-logo">
              <v-svg name="largeLogo"/>
            </div>
            <p class="main-section__text-title font-title">Новые рецепты со вкусом</p>
            <p class="main-section__text-title font-sub-title">Обширная база новых рецептов со всех уголков планеты в одном месте.</p>
            <v-button class="main-section__button" text="Найти рецепт"></v-button>
          </div>
        </div>
      </div>
    </section>
    <section class="main-page__new-recipes section">
      <div class="container main-page__new-recipes-box see-more-box">
        <h2 class="main-page__new-recipes-header sub-header">Новые рецепты</h2>
        <p class="see-more">посмотреть все</p>
      </div>
      <div v-if="recipes" class="main-page__new-recipes-content gray-content">
        <div class="container">
          <div class="new-recipes-content__recipes">
            <recipe-item v-for="item in recipes.slice(recipes.length - 3, recipes.length)" :key="item._id" :item="item" @handle="handleItem"></recipe-item>
          </div>
        </div>
      </div>
    </section>
    <section class="main-page__category section">
      <div class="container">
        <h2 class="main-page__category-header sub-header">Интересные категории</h2>
        <div class="main-page__category-content">
          <VButton class="main-page__tags" v-for="item in category" :key="item" :text="item.name" :is-border="true"></VButton>
        </div>
      </div>
    </section>
    <section class="main-page__forum section">
      <div class="container see-more-box">
        <h2 class="main-page__forum-header sub-header">Интересное для обсуждения</h2>
        <p class="see-more">посмотреть все</p>
      </div>
      <div class="main-page__forum-content gray-content" v-if="forumItems">
        <div class="container">
          <forum-item
            v-for="item in forumItems.slice(0, 3)"
            :key="item"
            class="all-artical__list-item"
            :item="item"
            @handle="clickForumItem"
          ></forum-item>
        </div>
      </div>
    </section>
    <section class="main-page__about">
      <div class="container">
        <h2 class="main-page__about-header header">Немного о проекте</h2>
        <div class="main-page__about-content">
          <div class="main-page__about-info">
            <v-svg class="main-page__about-logo" name="largeBlackLogo"/>
            <p class="main-page__about-text sub-text">
              Проект создан для организации обширной базы рецептов. Целью проекта является упрощение поиска идей для вкусного ужина, быстрого завтрака или сытного обеда.
            </p>
            <p class="main-page__about-text sub-text">
              Команда из 25 разработчиков решила создать платформу для размещения крутейших рецептов, а также для формирования комьюнити домашних поваров и просто место для общения в виде блога FoodBlog.
            </p>
            <p class="main-page__about-text sub-text">
              Свою благодарность можно выразить тут:
            </p>
            <v-button class="soc-btn" text="Donate"></v-button>
            <p class="sub-text">
              Следить за новостями и новыми проектами можно тут:
            </p>
            <div class="main-page__about-soc">
              <v-button class="soc-btn" text="Мы в twitter"></v-button>
              <v-button class="soc-btn" text="Рассылка на почту"></v-button>
            </div>
          </div>
          <div class="main-page__about-image">
            <img src="../assets/main.png" alt="">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import VButton from "@/components/v-button.vue"
import VSvg from "@/components/v-svg.vue"
import RecipeItem from "@/components/recipe-item.vue"
import ForumItem from "@/components/forum-item.vue"
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import axios from "axios";
import LINK from "@/api/link";


const router = useRouter();
const recipes = ref();
const category = ref();
const forumItems = ref();

onMounted(() => {
  axios.get(LINK + "recipes").then((res) => {
    if(res.status === 200) {
      if(res.data) {
        recipes.value = res.data;
        console.log(recipes.value);
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

  axios.get(LINK + "forum").then((res) => {
    if(res.status === 200) {
      if(res.data) {
        forumItems.value = res.data;
        console.log(forumItems.value);
      }
    }
  });
})


const clickForumItem = (item) => {
  router.push({path: `/blog/${item.itemId}`})
}

const handleItem = (item) => {
  router.push({path: `/recipes-page/${item.itemId}`})
}

</script>

<style>
.main-section__img {
  width: 100%;
}

.main-section__img img {
  width: 100%;
}

.main-section__img {
  position: relative;
}


section {
  padding: 35px 0;
}

.main-section__text {
  position: absolute;
  top: 50%;
  left: 100px;
  transform: translateY(-50%);
}

.main-section__text-title {
  color: #fff;
  margin-top: 12px;
}

.main-section__button {
  margin-top: 20px;
}

.main-page__new-recipes-box {
  display: flex;
  align-items: flex-end;
}

.new-recipes-content__recipes {
  display: flex;
  justify-content: space-between;
}

.forum-item:not(:last-child) {
  margin-bottom: 20px;
}

.see-more-box {
  display: flex;
  align-items: flex-end;
}

.see-more {
  margin-left: 20px;
  font-size: 14px;
  color: #96DC14;
}

.gray-content {
  width: 100%;
  background-color: #F5F5F5;
  padding: 50px 0;
  margin-top: 50px;
}

.main-page__category-content {
  margin-top: 50px;
}

.main-page__tags {
  margin-right: 10px;
}

.header {
  padding: 0 0 50px 0;
}

.main-page__about-content {
  display: flex;
}

.main-page__about-image {
  overflow: hidden;
  width: 80%;
  padding-left: 80px;
  border-radius: 20px 20px 20px 0;
}

.main-page__about-logo {
  padding-bottom: 40px;
}

.main-page__about-info {
  width: 80%;
  padding-right: 80px;
}

.main-page__about-text {
  margin-top: 20px;
}

.sub-text {
  line-height: 25px;
}

.soc-btn {
  margin: 20px 15px 20px 0;
}

</style>
