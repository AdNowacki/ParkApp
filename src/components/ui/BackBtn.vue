<script setup lang="ts">
  import { defineEmits } from 'vue';

  const emit = defineEmits(['click']);

  const clickHandler = (e: MouseEvent) => {
    emit('click', e);
  };
</script>
<template>
  <button
    @click="clickHandler"
    class="w-(--back-btn-size) aspect-square border-3 rounded-[50%] flex items-center justify-center cursor-pointer"
  >
    <img src="/images/arrow.svg" alt="Back button icon" />
  </button>
</template>
