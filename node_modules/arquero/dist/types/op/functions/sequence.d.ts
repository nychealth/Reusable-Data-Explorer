/**
 * Returns an array containing an arithmetic sequence from the start value
 * to the stop value, in step increments. If step is positive, the last
 * element is the largest start + i * step less than stop; if step is
 * negative, the last element is the smallest start + i * step greater
 * than stop. If the returned array would contain an infinite number of
 * values, an empty range is returned.
 * @param {number} [start=0] The starting value of the sequence.
 * @param {number} [stop] The stopping value of the sequence.
 *  The stop value is exclusive; it is not included in the result.
 * @param {number} [step=1] The step increment between sequence values.
 * @return {number[]} The generated sequence.
 */
export default function _default(start?: number, stop?: number, step?: number, ...args: any[]): number[];
