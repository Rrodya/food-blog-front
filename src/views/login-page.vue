<template>
  <div class="login-page">
    <div class="login-body container">
      <div class="login-body__info">
        <h2 class="font-header">Авторизация</h2>
        <div class="login-body__form">
          <v-input class="login-body__form-input" label="Почта" sub-label="Почта будет испольвоаться для входа в ваш аккаунт, поэтому будьте внимательны" placeholder="Введите вашу почту..."></v-input>
          <v-input class="login-body__form-input" label="Пароль" sub-label="Придумайте надежный пароль, чтобы никто не украл ваши рецептики." placeholder="Введите пароль" :is-password="true"></v-input>
          <p class="login-body__form-agreeds font-text">Придумали сложный пароль и не можете вспомнить? Восстановите пароль</p>
          <div class="login-body__form-regin">
            <v-button text="Войти"></v-button>
            <p class="login-body__form-regin-text font-text"><span>или</span> Создать аккаунт</p>
          </div>
        </div>
      </div>
      <div class="login-body__image">
        <img src="../assets/main.png" alt="no img">
      </div>
    </div>
  </div>
</template>

<script setup>
import VButton from "@/components/v-button.vue"
import VInput from "@/components/v-input.vue"
</script>

<style>
.login-body {
  display: flex;
  justify-content: space-between;
  padding: 50px 0;
}

.login-body__image {
  width: 50%;
  overflow: hidden;
  border-radius: 40px 40px 40px 0;
}

.login-body__info {
  width: 45%;
}
.login-body__image img{
  max-height: 100%;
}

.login-body__form-input {
  margin-top: 15px;
}

.login-body__form-agreeds {
  margin-top: 20px;
}

.login-body__form-regin {
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.login-body__form-regin-text {
  padding-left: 20px;
}

.login-body__form-regin-text span {
  padding-right: 7px;
}
</style>
