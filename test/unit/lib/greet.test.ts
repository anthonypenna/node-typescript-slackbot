import greet from '../../../src/lib/greet';

describe('greet', () => {
  it('returns the correct value', () => {
    expect(greet('Typescript')).toBe('Hello Typescript!');
  });
});
