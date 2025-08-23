<template>
  <div v-if="totalPages" class="flex justify-center items-center space-x-6">
    <button
      v-for="(_dot, index) in totalPages"
      :key="index"
      @click="emit('change', index + 1)"
      :class="[
        'w-6 h-6 rounded-full transition-all duration-300 cursor-pointer',
        currentPage === index + 1
          ? 'bg-decor-dark-400 shadow-(--shadow-200)'
          : 'bg-white border border-gray-300 shadow-(--shadow-inset-100) hover:shadow-md hover:bg-decor-dark-400',
      ]"
    ></button>
  </div>
</template>

<script setup lang="ts">
  import { computed, defineProps, withDefaults } from 'vue';

  const props = withDefaults(
    defineProps<{
      total: number;
      currentPage: number;
      perPage?: number;
    }>(),
    {
      total: 0,
      currentPage: 1,
      perPage: 4,
    }
  );

  const totalPages = computed(() => {
    return Math.ceil(props.total / props.perPage);
  });

  const emit = defineEmits(['change']);
</script>
