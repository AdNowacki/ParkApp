<script setup lang="ts">
  import { ref } from 'vue';
  import { LOGIN_USER } from '!/mutations';
  import { useMutation } from '@vue/apollo-composable';
  import { ApolloError } from '@apollo/client';

  const email = ref('');
  const password = ref('');

  const { mutate: loginUser } = useMutation(LOGIN_USER);

  const loginUserHandler = async () => {
    try {
      await loginUser({
        email: email.value,
        password: password.value,
      });

      console.log('Success');
    } catch (error) {
      console.error((error as ApolloError | Error)?.message ?? 'Unknown error');
    }
  };
</script>

<template>
  <FormKit type="form" submit-label="Zaloguj się" @submit="loginUserHandler" :actions="true" :errors="formErrors">
    <FormKit
      v-model="email"
      type="email"
      name="email"
      label="Adres e-mail"
      validation="required|email"
      placeholder="Wpisz swój e-mail"
    />

    <FormKit
      v-model="password"
      type="password"
      name="password"
      label="Hasło"
      validation="required|min:3"
      placeholder="Wpisz swoje hasło"
    />
  </FormKit>
  <h1 @click="loginUserHandler">Login Page</h1>
</template>

<style lang="scss" scoped></style>
