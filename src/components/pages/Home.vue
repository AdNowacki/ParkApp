<script setup lang="ts">
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  import PageHeader from '@/layouts/PageHeader.vue';
  import Content from '@/layouts/Content.vue';
  import Navigation from '@/layouts/Navigation.vue';
  import DotPagination from '@/ui/DotPagination.vue';
  import Remote from '@/ui/Remote.vue';
  import Gates from '@/common/Gates.vue';

  const { t } = useI18n();

  const currentPage = ref<number>(1);

  const remoteMockData = {
    title: t('mock.title'),
    items: [
      { id: 1, label: 'Szlaban Grzybowska 1', remoteLabel: 'A' },
      { id: 2, label: 'Brama garażowa #1', remoteLabel: 'B' },
      { id: 3, label: 'Brama garażowa #2', remoteLabel: 'C' },
      { id: 4, label: 'Szlaban Powstańsów Śląskich 32', remoteLabel: 'D' },
    ],
    hint: t('mock.hint'),
  };

  const activeGate = ref<number | undefined>(remoteMockData.items[0].id);
</script>

<template>
  <PageHeader />
  <Content class="mt-10">
    <div class="pb-15">
      <div class="flex">
        <div class="grow-0 shrink-0 md:w-[50%] w-[33%] py-6">
          <Remote :items="remoteMockData.items" />
        </div>
        <div class="grow-0 shrink-0 md:w-[50%] w-[67%] p-6">
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
