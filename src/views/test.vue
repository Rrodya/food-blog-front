<template>
  <div class="v-test">
    <div class="v-test-content">
      <h1>Крипто Про</h1>
      <input type="file" @input="isBtn = true">
      <button v-if="isBtn" @click="isSign = true"><p>ПОДПИСАТЬ</p></button>
    </div>
    <div class="v-test-loader" v-if="isSign">
      <div class="v-test-loader-item">
        <svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
    <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        dur="1s"
        from="0 50 50"
        to="360 50 50"
        repeatCount="indefinite" />
  </path>
</svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-test",
  data() {
    return {
      isBtn: false,
      isSign: false
    }
  },
}
</script>

<style scoped>
.v-test {
  font-family: "Times New Roman";
}

h1 {
  font-size: 80px;

}

.v-test-content {
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
}

input {
  width: 100%;
  margin-top: 60px;
  font-size: 30px;
}

button p {
  font-size: 35px;
}

button {
  margin-top: 60px;
  padding: 10px;
}

.v-test-loader {
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,.7);
}
svg{
  width: 100px;
  height: 100px;
  margin: 20px;
  display:inline-block;
}
</style>
