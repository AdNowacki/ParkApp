<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  import PageContainer from '@/layouts/PageContainer.vue';
  import HeaderTitle from '~/components/layouts/HeaderTitle.vue';

  const { t } = useI18n();
</script>
<template>
  <header
    class="bg-linear-to-b from-decor-400 to-decor-100 min-h-[200px] md:min-h-[300px] flex items-stretch pt-10 shadow-(--shadow-100) rounded-b-2xl"
  >
    <div class="bg-[url(/images/key-icon.svg)] bg-no-repeat bg-right w-full">
      <PageContainer>
        <div class="flex">
          <button>Back button @TODO</button>
          <HeaderTitle :content="t('page.login.content.title')" />
        </div>
      </PageContainer>
    </div>
  </header>
</template>
