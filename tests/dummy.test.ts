import { describe, test, expect } from 'vitest';

const sum = (a: number, b: number): number => a + b;

describe('Dummy test', () => {
  test('adds 10 + 20 to equal 30', () => {
    expect(sum(10, 20)).toBe(30);
  });
});
