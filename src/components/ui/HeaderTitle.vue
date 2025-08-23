<script setup lang="ts">
  import { withDefaults, defineProps } from 'vue';
  const props = withDefaults(
    defineProps<{
      content: string;
    }>(),
    {
      content: '',
    }
  );
</script>
<template>
  <h1 v-html="props.content" class="font-decor font-bold text-[32px]/[40px]"></h1>
</template>
