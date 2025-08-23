<script setup lang="ts">
  import PageHeader from '@/layouts/PageHeader.vue';
  import Content from '@/layouts/Content.vue';
  import Navigation from '@/layouts/Navigation.vue';
  import Pagination from '@/ui/Pagination.vue';
</script>

<template>
  <PageHeader />
  <Content class="mt-10">
    <div class="flex gap-10">
      <div class="grow-0 shrink-0 basis-[33%]">Pilot</div>
      <div>Lista</div>
    </div>
    <Pagination :total="10" :current="1" />
  </Content>
  <Navigation />
</template>
