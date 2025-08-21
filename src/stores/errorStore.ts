import { defineStore } from 'pinia';
import type { TErrorStoreItem } from '~/types';

export const useErrorStore = defineStore('error', {
  state: () => {
    return { errors: [] as TErrorStoreItem[] };
  },
  actions: {
    addItem(message: TErrorStoreItem) {
      this.errors = [...this.errors, message];
    },
    removeItem(id: string) {
      this.errors = this.errors.filter((error) => error.id !== id);
    },
    clearAll() {
      this.errors = [];
    },
  },
});
