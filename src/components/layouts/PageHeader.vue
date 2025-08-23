<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  import PageContainer from '@/layouts/PageContainer.vue';
  import HeaderTitle from '@/ui/HeaderTitle.vue';

  const { t } = useI18n();
</script>
<template>
  <header class="page-header min-h-[200px] md:min-h-[300px] pt-10">
    <PageContainer>
      <HeaderTitle :content="t('page.login.content.title')" />
    </PageContainer>
  </header>
</template>

<style scoped lang="scss">
  .page-header {
    background-image: linear-gradient(to bottom, var(--color-decor-500), var(--color-decor-100));
  }
</style>
