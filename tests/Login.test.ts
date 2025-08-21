import { describe, it, beforeEach, expect, vi } from 'vitest';
import { mount, VueWrapper } from '@vue/test-utils';
import { createPinia } from 'pinia';
import Login from '../src/components/pages/Login/Login.vue';
import { i18n, router } from './plugins';
import { plugin, defaultConfig } from '@formkit/vue';

describe('Login.vue', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    vi.resetAllMocks();
    wrapper = mount(Login, {
      global: {
        plugins: [i18n, createPinia(), router, [plugin, defaultConfig({})]],
      },
    });
  });

  it('Should render the content of UI elements', () => {
    expect(wrapper.text()).toContain('Zaloguj się');
    expect(wrapper.find('button').text()).toBe('Wyślij');
  });

  it('The email address should be the same.', async () => {
    const button = wrapper.find('button');
    await button.trigger('click');
    const emailInput = wrapper.find('input[type="email"]');
    await emailInput.setValue('test@example.com');
    expect((emailInput.element as HTMLInputElement).value).toBe('test@example.com');
  });
});
