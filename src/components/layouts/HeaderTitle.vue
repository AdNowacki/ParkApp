<script setup lang="ts">
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
  <h1 v-html="props.content" class="font-decor font-bold text-decor-dark-400 text-[32px]/[40px]"></h1>
</template>
