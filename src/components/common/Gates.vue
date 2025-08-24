<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      title: string;
      hint: string;
      items: { id: number; label: string }[];
      modelValue?: number;
    }>(),
    {
      title: '',
      hint: '',
      items: () => [],
      modelValue: undefined,
    }
  );

  const emit = defineEmits(['update:modelValue']);

  const isActive = (gateId: number): boolean => {
    return props.modelValue === gateId;
  };
</script>

<template>
  <div class="flex flex-col p-6 text-center text-(--color-decor-dark-400)">
    <h2 class="font-decor2 text-[24px]/[40px] font-bold mb-8">{{ props.title }}</h2>

    <button
      v-for="(gate, i) in props.items"
      :key="gate.id"
      @click="emit('update:modelValue', gate.id)"
      :class="[
        i === props.items.length - 1 ? 'mb-0' : 'mb-4',
        isActive(gate.id)
          ? 'bg-(--color-decor-dark-400) text-white'
          : 'border-(--color-decor-dark-400) text-(--color-decor-dark-400) hover:bg-(--color-decor-dark-400) hover:text-white',
      ]"
      class="overflow-hidden whitespace-nowrap text-ellipsis cursor-pointer w-full max-w-xs px-3 py-2 rounded-xl border text-lg font-medium transition"
    >
      {{ gate.label }}
    </button>

    <p class="font-decor2 text-base mt-8">{{ props.hint }}</p>
  </div>
</template>
