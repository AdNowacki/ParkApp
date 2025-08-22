<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useErrorStore } from '~/stores/errorStore';

  const errorStore = useErrorStore();
  const { errors } = storeToRefs(errorStore);

  const show = ref<boolean>(false);
  watch(errors, (newErrors) => {
    show.value = !!newErrors.length;
    if (show.value) {
      setTimeout(() => {
        show.value = false;
        errorStore.clearAll();
      }, 7000);
    }
  });
</script>
<template>
  <Transition>
    <div
      class="absolute right-4 bottom-4 border border-red-700 px-4 py-2 bg-red-100 text-red-700 rounded-md min-w-3xs text-left"
      v-if="show"
    >
      <span v-for="error in errors" :key="error.message" class="block">{{ error.message }}</span>
    </div>
  </Transition>
</template>
