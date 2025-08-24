<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  import PageContainer from '@/layouts/PageContainer.vue';
  import HeaderTitle from '@/layouts/HeaderTitle.vue';
  import BackBtn from '@/ui/BackBtn.vue';

  const { t } = useI18n();
</script>
<template>
  <header
    class="bg-linear-to-b from-decor-300 to-decor-100 min-h-[280px] flex items-stretch pt-15 shadow-(--shadow-100) rounded-b-2xl"
  >
    <div class="bg-[url(/images/key-icon.svg)] bg-bottom-right bg-no-repeat w-full">
      <PageContainer>
        <div class="flex gap-5">
          <div class="grow-0 shrink-0">
            <BackBtn />
          </div>
          <div>
            <HeaderTitle :content="t('page.login.content.title')" />
          </div>
        </div>
      </PageContainer>
    </div>
  </header>
</template>
