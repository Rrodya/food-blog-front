<template>
  <div class="register-page">
    <div class="container register-body">
      <div class="register-body__info">
        <h2 class="font-header">Регистрация</h2>
        <div class="register-body__form">
          <v-input v-model="form.name" :model-value="form.name" @update:modelValue="form.name = $event" sub-label="Имя и Фамилия нужны для того, чтобы вы могли общаться с другими пользователями." placeholder="Введите ваше имя и фамилию..."></v-input>
          <v-input v-model="form.email" :model-value="form.email" @update:modelValue="form.email = $event" class="register-body__form-input" label="Почта" sub-label="Почта будет испольвоаться для входа в ваш аккаунт, поэтому будьте внимательны" placeholder="Введите вашу почту..."></v-input>
          <v-input v-model="form.password" :model-value="form.password" @update:modelValue="form.password = $event" class="register-body__form-input" label="Пароль" sub-label="Придумайте надежный пароль, чтобы никто не украл ваши рецептики." placeholder="Введите пароль" :is-password="true"></v-input>
          <v-input class="register-body__form-input" sub-label="Повторите его, чтобы не забыть" placeholder="Повторите пароль" :is-password="true"></v-input>
          <p class="register-body__form-agreeds font-text">А также прочитайте пользовательское соглашение</p>
          <div class="register-body__form-regin">
            <v-button text="Регистрация" @clickHandle="submitForm"></v-button>
            <p class="register-body__form-regin-text font-text"><span>или</span> Войдите в аккаунт</p>
          </div>
        </div>
      </div>
      <div class="register-body__image">
        <img src="../assets/main.png" alt="no img">
      </div>
    </div>
  </div>
</template>

<script setup>
import VInput from "@/components/v-input.vue"
import VButton from "@/components/v-button.vue"
import { reactive, computed, ref } from "vue";

const form = reactive({name: null, email: null, password: null, repPassword: null})


const validForm = () => {
  if (this.form.user && this.form.email && this.form.password) {
    return true
  }
  return false
}


const submitForm = () => {
  console.log('asdfa');
  if(this.validForm()){
    console.log("is valid");
  }
}
</script>

<style>
.register-body {
  display: flex;
  justify-content: space-between;
  padding: 50px 0;
}

.register-body__image {
  width: 50%;
  overflow: hidden;
  border-radius: 40px 40px 40px 0;
}

.register-body__image img{
  max-height: 100%;
}

.register-body__form-input {
  margin-top: 15px;
}

.register-body__form-agreeds {
  margin-top: 20px;
}

.register-body__form-regin {
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.register-body__form-regin-text {
  padding-left: 20px;
}

.register-body__form-regin-text span {
  padding-right: 7px;
}
</style>
