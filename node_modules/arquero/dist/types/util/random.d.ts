export function random(): number;
/**
 * Set a seed value for random number generation.
 * If the seed is a valid number, a 32-bit linear congruential generator
 * with the given seed will be used to generate random values.
 * If the seed is null, undefined, or not a valid number, the random
 * number generator will revert to Math.random.
 * @param {number} seed The random seed value. Should either be an
 *  integer or a fraction between 0 and 1.
 */
export function seed(seed: number): void;
