<script setup lang="ts">
  import PageHeader from '@/layouts/PageHeader.vue';
  import Content from '@/layouts/Content.vue';
  import Navigation from '@/layouts/Navigation.vue';
</script>

<template>
  <PageHeader />
  <Content class="mt-10">
    <div class="flex">
      <div>Pilot</div>
      <div>Lista</div>
    </div>
    <div>Paginacja</div>
  </Content>
  <Navigation />
</template>
