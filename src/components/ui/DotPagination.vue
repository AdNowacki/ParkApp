<script setup lang="ts">
  import { computed, withDefaults, defineProps } from 'vue';

  const props = withDefaults(
    defineProps<{
      total?: number;
      perPage?: number;
      current?: number;
    }>(),
    {
      total: 0,
      perPage: 4,
      current: 1,
    }
  );

  const totalPages = computed(() => {
    return Math.ceil(props.total / props.perPage);
  });
</script>
<template>
  <div v-if="totalPages > 1" class="max-w-3xl w-full mx-auto px-4 lg:p-0">totalPages: {{ totalPages }}</div>
</template>
