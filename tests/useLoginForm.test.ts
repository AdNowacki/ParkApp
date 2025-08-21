import { describe, it, expect } from 'vitest';
import { useLoginForm } from '../src/composables';

describe('useLoginForm', () => {
  it('should clear email and password', () => {
    const { email, password, cleanForm } = useLoginForm();

    email.value = 'adamn@example.com';
    password.value = '$G9&867tet7';
    expect(email.value).toBe('adamn@example.com');
    expect(password.value).toBe('$G9&867tet7');

    cleanForm();

    expect(email.value).toBe('');
    expect(password.value).toBe('');
  });
});
