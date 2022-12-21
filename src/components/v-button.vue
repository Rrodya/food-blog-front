<template>
  <button
    class="v-button"
    :class="{ 'v-button_border': isBorder}"
    @click="clickHandle"
  >
    <slot>
      {{text}}
    </slot>
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  text: String,
  isBorder: {
    type: Boolean,
    required: false,
    default: false
  },
})

const emit = defineEmits(["clickHandle"])

function clickHandle() {
  emit("clickHandle");
}

</script>

<style scoped>
.v-button {
  padding: 12px 20px;
  outline: none;
  border: none;
  border-radius: 100px;
  background-color: #96DC14;
  font-family: 'Comfortaa', cursive;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}

.v-button_border {
  background-color: transparent;
  border: 1px solid #000000;
}
</style>
