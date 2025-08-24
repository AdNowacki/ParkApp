<script setup lang="ts">
  const emit = defineEmits(['click']);
  const props = withDefaults(
    defineProps<{
      items: { id: number; label: string; remoteLabel: string }[];
    }>(),
    {
      items: () => [],
    }
  );

  const componentClasses = [
    'relative',
    'w-[204px]',
    'text-3xl',
    'text-center',
    'border-3',
    'rounded-[55px]',
    'border-decor-dark-400',
    'p-7',
    'pt-14',
    '-ml-[90px]',
    'md:m-auto',
    'before:content-[""]',
    'before:absolute',
    'before:top-5',
    'before:right-7',
    'before:w-[26px]',
    'before:aspect-square',
    'before:border-3',
    'before:border-decor-dark-40',
    'before:rounded-full',
    'after:content-[""]',
    'after:absolute',
    'after:w-[102px]',
    'after:h-[26px]',
    'after:border-3',
    'after:border-t-0',
    'after:border-decor-dark-40',
    'after:left-1/2',
    'after:transform',
    'after:-translate-x-1/2',
    'after:bottom-[-26px]',
    'after:rounded-b-3xl',
  ];
</script>
<template>
  <div :class="componentClasses">
    <div class="w-full border-3 rounded-[45px] border-decor-dark-400 overflow-hidden">
      <button
        v-for="(gate, index) in props.items"
        :key="index"
        @click="emit('click', gate.id)"
        :class="{ 'border-t-0': index === 0 }"
        class="block w-full cursor-pointer py-2 border-t border-indigo-900 bg-white hover:bg-decor-400 active:bg-decor-400"
      >
        {{ gate.remoteLabel }}
      </button>
    </div>
  </div>
</template>
