<script setup lang="ts">
  import PageContainer from '@/layouts/PageContainer.vue';
</script>
<template>
  <header class="page-header min-h-[200px] md:min-h-[300px]">
    <PageContainer>Content</PageContainer>
  </header>
</template>

<style scoped lang="scss">
  .page-header {
    background-image: linear-gradient(to bottom, var(--color-decor-500), var(--color-decor-100));
  }
</style>
