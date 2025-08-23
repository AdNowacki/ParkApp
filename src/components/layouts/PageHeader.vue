<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  import PageContainer from '@/layouts/PageContainer.vue';

  const { t } = useI18n();
</script>
<template>
  <header class="page-header min-h-[200px] md:min-h-[300px] pt-10">
    <PageContainer>
      <h1 v-html="t('page.login.content.title')"></h1>
    </PageContainer>
  </header>
</template>

<style scoped lang="scss">
  .page-header {
    background-image: linear-gradient(to bottom, var(--color-decor-500), var(--color-decor-100));
  }
</style>
