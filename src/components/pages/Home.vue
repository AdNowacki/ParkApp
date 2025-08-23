<script setup lang="ts">
  import { ref } from 'vue';
  import PageHeader from '@/layouts/PageHeader.vue';
  import Content from '@/layouts/Content.vue';
  import Navigation from '@/layouts/Navigation.vue';
  import DotPagination from '~/components/ui/DotPagination.vue';

  const currentPage = ref<number>(1);

  const changePageHandler = (page: number) => {
    currentPage.value = page;
  };
</script>

<template>
  <PageHeader />
  <Content class="mt-10">
    <div class="pb-15">
      <div class="flex gap-10">
        <div class="grow-0 shrink-0 basis-[33%]">Pilot</div>
        <div>Lista</div>
      </div>
      <DotPagination @change="changePageHandler" :total="18" :current-page="currentPage" class="py-10" />
    </div>
  </Content>
  <Navigation />
</template>
