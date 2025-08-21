<script setup lang="ts">
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
</script>
<template>
  <div class="text-gray-800 px-4">
    <h1 class="text-6xl font-bold text-red-700 mb-4">404</h1>
    <p class="text-xl mb-6 text-center">{{ t('error.not_found.content') }}</p>
    <router-link to="/" class="inline-block px-6 py-2 transition">{{ t('error.not_found.btn_content') }}</router-link>
  </div>
</template>
