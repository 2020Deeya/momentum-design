// AI-Assisted
// @ts-nocheck
const motion = require('../core/motion.json');

describe('Motion core tokens (pre-build)', () => {
  const categories = Object.keys(motion.motion);

  it('should have a top-level motion key', () => {
    expect(motion).toHaveProperty('motion');
  });

  it('should have at least one category', () => {
    expect(categories.length).toBeGreaterThan(0);
  });

  describe.each(categories)('%s tokens', (category) => {
    const tokens = motion.motion[category];

    it('should have at least one token', () => {
      expect(Object.keys(tokens).length).toBeGreaterThan(0);
    });

    it('every token should have value, type, and description', () => {
      Object.values(tokens).forEach((token) => {
        expect(token).toHaveProperty('value');
        expect(token).toHaveProperty('type');
        expect(token).toHaveProperty('description');
        expect(typeof token.value).toBe('string');
        expect(typeof token.type).toBe('string');
        expect(typeof token.description).toBe('string');
        expect(token.value.length).toBeGreaterThan(0);
        expect(token.description.length).toBeGreaterThan(0);
      });
    });
  });
});
// End AI-Assisted
