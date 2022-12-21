<template>
  <div class="v-input">
    <label>
      <p v-if="props.label" class="v-input__label font-s-title">{{ props.label }}</p>
      <p v-if="props.subLabel" class="v-input__sub-label form-tiny-text">{{ props.subLabel }}</p>
      <input class="v-input__input" type="text" :placeholder="props.placeholder" @input="emit('update:modelValue', $event.target.value)">
    </label>
  </div>
</template>

<script setup>
import {defineProps} from "vue";
import {computed, defineEmits} from "vue";

const emit = defineEmits(['update:modelValue'])

// const inputVal = computed({
//   get() {
//     return this.value;
//   },
//   set(val) {
//     emit('update:modelValue', val);
//   }
// })

const props = defineProps({
  label: {
    type: String,
    required: false,
    default: ""
  },
  subLabel: {
    type: String,
    required: false,
    default: ""
  },
  placeholder: String,
  isPassword: {
    type: Boolean,
    required: false,
    default: false
  },
  modelValue: String,
})
</script>

<style>

.v-input__input {
  margin-top: 20px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, .2);
}

.v-input__sub-label {
  padding-top: 10px;
}

.v-input__input {
  width: 450px;
  border: none;
  outline: none;
  border-radius: 25px;
  background-color: #ffffff;
  color: #979797;
  font-size: 14px;
  padding: 19px 24px;
}

.v-input__sub-label {
  color: #626262;
}
</style>
