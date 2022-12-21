<template>
  <div class="profile-page">
    <div class="profile">
      <div class="container">
        <div class="profile__menu">
          <v-button class="profile__menu-item" v-for="item in 7" :key="item" text="Профиль" :is-border="true"></v-button>
        </div>
        <div class="profile__info">
          <h2 class="profile__info-header font-header">Профиль</h2>
          <div class="profile__info-background">
            <img src="../assets/main.png" alt="not back">
          </div>
          <div class="profile__info-personal">
            <div class="profile__info-personal-image">
              <img src="../assets/main.png" alt="no avataer">
            </div>
            <div class="profile__info-personal-content">
              <p class="profile__info-name">
                Наташка Смирнова
              </p>
              <div class="profile__info-subs">
                <div class="info-subs__likes profile__info-subs-item">
                  <v-svg name="search"></v-svg>
                  <p class="info-subs__likes-count">
                    25 560
                  </p>
                </div>
                <div class="info-subs__sohr profile__info-subs-item">
                  <v-svg name="search"></v-svg>
                  <p class="info-subs__sohr-count">
                    25 560
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="profile__recipes">
        <div class="container">
          <div class="profile__recipes-header">
            <h2 class="profile__recipes-title font-title">Рецепты пользователя </h2>
            <v-svg name="search"></v-svg>
          </div>
        </div>
        <div class="gray-content">
          <div class="container profile__recipes-info">
              <div class="profile__recipes-list">
                <recipe-item v-for="item in 2" :key="item" :is-small="false"></recipe-item>
              </div>

            <div class="profile__recipes-subscribes">
              <ul class="profile__recipes-subscribes-list">
                <p class="profile__recipes-subscribes-list-header">Подписки</p>
                <li class="profile__recipes-subscribes-list-item" v-for="item in 6" :key="item">
                  <sub-item></sub-item>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import VButton from "../components/v-button.vue";
import VSvg from "../components/v-svg.vue";
import RecipeItem from "../components/recipe-item.vue";
import SubItem from "../views/sub-item.vue"
</script>

<style>
.profile__menu {
  padding: 20px 0;
  display: flex;
}

.profile__menu-item:not(:last-child) {
  margin-right: 10px;
}

.profile__info-header {
  padding: 20px 0;
}

.profile__info-background {
  height: 350px;
  overflow: hidden;
  border-radius: 30px 30px 30px 0;
}

.profile__info-personal {
  padding: 0 150px 100px;
  position: relative;
}

.profile__info-personal-image {
  position: absolute;
  left: 150px;
  top: -50%;
  border: 7px solid #F8FFFD;
  border-radius: 100px;
  width: 183px;
  height: 183px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile__info-personal-image img {
  min-height: 100%;
}

.profile__info-personal-content {
  display: flex;
  justify-content: space-between;
  padding-left: 40%;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;
}

.profile__info-subs {
  border-radius: 40px;
  padding: 10px;
  border: 1px solid #000000;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.profile__info-subs-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.profile__info-subs-item p {
  padding-left: 7px;
  padding-right: 7px;
}

.profile__info-name {
  margin-top: 20px;
}

.profile__recipes-header {
  display: flex;
  align-items: center;
}

.profile__recipes-title {
  padding-right: 15px;
}

.profile__recipes-list {
  display: flex;
  justify-content: space-between;
  width: 68%;
}

.profile__recipes-info {
  display: flex;
  justify-content: space-between;
}

.profile__recipes-subscribes-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile__recipes-subscribes-list-item {
  margin-top: 20px;
}

.profile__recipes-subscribes {
  padding: 20px 60px;
  background-color: #ffffff;
  border-radius: 20px 20px 20px 0;
  height: 100%;
}
</style>
