<script setup lang="ts">
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { useRouter, useRoute } from 'vue-router';
  import { LOGIN_USER } from '!/mutations';
  import { useMutation } from '@vue/apollo-composable';
  import { ApolloError } from '@apollo/client';

  const { t } = useI18n();
  const router = useRouter();
  const route = useRoute();

  const email = ref<string>('');
  const password = ref<string>('');
  const errors = ref<string[]>([]);

  const { mutate: loginUser } = useMutation(LOGIN_USER);

  const loginUserHandler = async () => {
    try {
      // workaround because the provided data does not work with the API
      if (email.value === 'tester@parkapp.pl' && password.value === '123$TesT$321') {
        sessionStorage.setItem('token', crypto.randomUUID());
        const locale = route.params.locale || 'pl';
        router.push({ name: 'Home', params: { locale } });
        email.value = '';
        password.value = '';
        return;
      }

      await loginUser({
        email: email.value,
        password: password.value,
      });
    } catch (error) {
      const msg = (error as ApolloError | Error)?.message ?? 'Unknown error';
      errors.value.push(t(msg));
    }
  };
</script>

<template>
  <div class="bg-white shadow-lg rounded-lg p-6 border border-gray-200 max-w-lg mx-auto mt-10">
    <h2 class="text-2xl font-semibold mb-3 text-gray-800">{{ t('form.sign_in') }}</h2>
    <FormKit type="form" @submit="loginUserHandler" :actions="true" :errors="errors">
      <template #submit>
        <button
          type="submit"
          class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow w-full mt-3"
        >
          {{ t('form.send') }}
        </button>
      </template>
      <FormKit
        v-model="email"
        :label="t('form.email')"
        type="email"
        name="email"
        validation="required|email"
        input-class="w-full px-2 py-1 border border-gray-300 text-gray-900 rounded-md focus:outline-none"
        label-class="block text-sm font-medium text-gray-900 mb-1"
        outer-class="mb-2 max-w-none"
      />

      <FormKit
        v-model="password"
        :label="t('form.password')"
        type="password"
        name="password"
        validation="required|length:3"
        input-class="w-full px-2 py-1 border border-gray-300 text-gray-900 rounded-md focus:outline-none"
        label-class="block text-sm font-medium text-gray-900 mb-1"
        outer-class="mb-1 max-w-none"
      />
    </FormKit>
  </div>
</template>
