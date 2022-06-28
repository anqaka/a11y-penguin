<script setup lang="ts">
import { ref } from 'vue'

const inputValue1 = ref('')
const inputValue2 = ref('')
const showHidden = ref(false)

function showMessage() {
  if (inputValue1.value && inputValue2.value) {
    showHidden.value = true
  }
}
</script>
<template>
  <div class="flex flex-col max-w-[300px] mx-auto mt-9">
    <input
      id="name"
      type="text"
      placeholder="Your name"
      class="input input-bordered input-primary w-full max-w-xs mb-4 focus:outline-none"
      v-model="inputValue1"
      required
    >
    <input
      id="foo"
      type="text"
      placeholder="Something nice for a penguin"
      class="input input-bordered input-primary w-full max-w-xs mb-4 focus:outline-none no-cursor"
      v-model="inputValue2"
      required

    >
    <button
      class="btn btn-primary focus:outline-none"
      @click="showMessage"
    >
      Check hidden message
    </button>
    <div v-if="showHidden" class="max-w-[500px] p-6">
      <img src="images/penguin-hero.jpeg" alt="">
      <p class="text-center text-white">Disability is not a a problem. A problem is an unaccessible website</p>
    </div>
  </div>
</template>
<style>
  .no-cursor {
    cursor: none;
  }
</style>