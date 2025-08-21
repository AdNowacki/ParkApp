import { ref } from 'vue';

export const useLoginForm = () => {
  const email = ref<string>('');
  const password = ref<string>('');

  const cleanForm = () => {
    email.value = '';
    password.value = '';
  };

  return {
    email,
    password,
    cleanForm,
  };
};
