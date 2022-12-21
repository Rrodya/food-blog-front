<template>
  <div class="one-recipe">
    <div v-if="item" class="recipe container">
      <div class="recipe-image">
        <img src="../assets/main.png" alt="">
      </div>
      <div class="recipe-info">
        <p class="recipe-info__name font-header">
          {{item.name}}
        </p>
        <p class="recipe-info__desc">
          {{item.description}}
        </p>
      </div>
      <div class="recipe-compound">
        <p class="recipe-compound__title font-title">Ингредиенты</p>
        <div class="recipe-compound__desc">
          <div class="recipe-compound__desc-item" v-for="item in item.compound" :key="item">
            <p class="recipe-compound__desc-item-name">{{ item.title }}</p>
            <div class="recipe-compound__desc-item-someBullshitThinkIdk"></div>
          </div>
        </div>
      </div>
      <div class="recipe-steps">
        <h1 class="recipe-steps__title font-title">
          Шаги приготовления
        </h1>
        <ul v-if="item.steps" class="recipe-steps__list">
          <li v-for="item in item.steps" :key="item" class="recipe-steps__list-item">{{item.step}}</li>
        </ul>
      </div>
    </div>
    <section class="recipes-page__popular">
      <div class="container">
        <h2 class="sub-header">
          Другие рецепты этой категорииы
        </h2>
      </div>
      <div class="gray-content">
        <div class="container">
          <div class="recipes-page__popular-list">
            <recipe-item v-for="item in recipes.slice(0, 3)" :key="item._id" :item="item" @handle="handleItem"></recipe-item>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import RecipeItem from "@/components/recipe-item.vue"
import {defineProps, onMounted, ref, onBeforeMount} from "vue";
import LINK from "@/api/link";
import axios from "axios";
import {useRouter} from "vue-router";

const router = useRouter()
const recipes = ref([]);
const item = ref(false);
const idItem = ref();

onBeforeMount(() => {
  let currentURL = (document.URL);
  idItem.value = currentURL.split("/")[5];
})

const handleItem = (item) => {
  console.log('handle');
  router.push({path: `/recipes-page/${item.itemId}`})
}

onMounted(() => {
  axios.get(LINK + "recipes").then((res) => {
    if(res.status === 200) {
      if(res.data) {
        let recip = res.data.filter(item => item._id === idItem.value)
        recipes.value = res.data
        item.value = recip[0];
        console.log(recip);
      }
    }
  });
})

const props = defineProps({
  item: Object
})

</script>

<style>

.recipe {
  margin-top: 40px;
}
.recipe-compound {
  width: 50%;
}

.recipe-compound__desc-item-name {
  width: 60%;
}
.recipe-compound__desc {
  padding: 24px;
  border-radius: 20px;
  border: 1px solid #000000;
}

.recipe-compound__desc-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.recipe-compound__desc-item-someBullshitThinkIdk {
  width: 90%;
  height: 1px;
  background-color: black;
}

.recipe-compound__desc-item:not(:last-child), .recipe-steps__list-item:not(:last-child) {
  padding-bottom: 20px;
}

.recipes-page__popular-list {
  display: flex;
  justify-content: space-between;
}

.recipe-info__name {
  margin-top: 60px;
}

.recipe-info__desc {
  margin-top: 40px;
}

.recipe-compound, .recipe-steps {
  margin-top: 40px;
}

.recipe-compound__desc {
  margin-top: 30px;
}

.recipe-steps__title {
  margin-bottom: 30px;
}

.recipes-page__popular {
  margin-top: 30px;
}
</style>
