<script setup lang="ts">
  import { ref } from 'vue';
  import PageHeader from '@/layouts/PageHeader.vue';
  import Content from '@/layouts/Content.vue';
  import Navigation from '@/layouts/Navigation.vue';
  import DotPagination from '~/components/ui/DotPagination.vue';
  import Gates from '@/common/Gates.vue';

  const currentPage = ref<number>(1);

  const remoteMockData = {
    title: 'Długa nazwa pilota',
    items: [
      { id: 1, label: 'Szlaban Grzybowska 1' },
      { id: 2, label: 'Brama garażowa #1' },
      { id: 3, label: 'Brama garażowa #2' },
      { id: 4, label: 'Szlaban Powstańsów Śląskich 32' },
    ],
    hint: 'Wybierz bramę, by otworzyć',
  };

  const activeGate = ref<number | undefined>(remoteMockData.items[0].id);
</script>

<template>
  <PageHeader />
  <Content class="mt-10">
    <div class="pb-15">
      <div class="flex">
        <div class="grow-0 shrink-0 md:w-[50%] w-[33%]">Pilot</div>
        <div class="grow-0 shrink-0 md:w-[50%] w-[67%]">
          <Gates
            v-model="activeGate"
            :title="remoteMockData.title"
            :hint="remoteMockData.hint"
            :items="remoteMockData.items"
          />
        </div>
      </div>
      <DotPagination :total="18" v-model="currentPage" class="py-10" />
    </div>
  </Content>
  <Navigation />
</template>
