<template>
  <div class="recipes-page">
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
    <section class="recipes-page__popular">
      <div class="container">
        <h2 class="sub-header">
          Популярные рецепты
        </h2>
      </div>
      <div class="gray-content">
        <div class="container">
          <div class="recipes-page__popular-list">
            <recipe-item v-for="item in popularRecipes" :key="item._id" :item="item" @handle="handleItem"></recipe-item>
          </div>
        </div>
      </div>
    </section>
    <section class="recipes-page__popular">
      <div class="container">
        <h2 class="sub-header">
          Самые новые  рецепты
        </h2>
      </div>
      <div class="gray-content">
        <div class="container">
          <div class="recipes-page__popular-list">
            <recipe-item v-for="item in recipes.slice(recipes.length - 3, recipes.length)" :key="item._id" :item="item" @handle="handleItem"></recipe-item>
          </div>
        </div>
      </div>
    </section>
    <section class="inter-category">
      <div class="container">
        <h2 class="inter-category__header sub-header">Все рецепты</h2>
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
    <section class="recipes-page__popular">
      <div class="gray-content recipes-page__popular-body">
        <div class="container">
          <div class="recipes-page__popular-list">
            <recipe-item
              class="recipes-page__popular-list-item"
              v-for="item in recipes.slice(0, countAllRecipes)"
              :key="item._id"
              :item="item"
              @handle="handleItem"
            ></recipe-item>
          </div>
        </div>
        <v-button class="recipes-page__popular-download-more" :is-border="true" text="Загрузить еще" @clickHandle="handleClick"></v-button>
      </div>
    </section>
  </div>
</template>

<script setup>
import VButton from "@/components/v-button.vue"
import RecipeItem from "@/components/recipe-item.vue";
import {computed, onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import axios from "axios"
import LINK from "@/api/link.js";

const router = useRouter();
const recipes = ref([]);
const countAllRecipes = ref(3);
const category = ref();


const handleItem = (item) => {
  router.push({path: `/recipes-page/${item.itemId}`})
}

const popularRecipes = computed(() => {
  let popRecipe = recipes.value.filter((item) => item.isPopular)
    return popRecipe.slice(0, 3);
})

onMounted(() => {
  axios.get(LINK + "recipes").then((res) => {
    if(res.status === 200) {
      if(res.data) {
        recipes.value = res.data;
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

function handleClick() {
  countAllRecipes.value += 3;
  console.log(countAllRecipes.value);
}

</script>

<style scoped>
.inter-category__list-item:not(:last-child) {
  margin-right: 10px;
  margin-bottom: 20px;
}

.recipes-page__popular-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.inter-category__list {
  margin-top: 20px;
}

.recipes-page__popular-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.recipes-page__popular-download-more {
  margin-top: 30px;
}

.recipes-page__popular-list-item {
  margin-bottom: 25px;
}
</style>
