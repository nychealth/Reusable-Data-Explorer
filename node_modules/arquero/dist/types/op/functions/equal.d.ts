/**
 * Compare two values for equality, using join semantics in which null
 * !== null. If the inputs are object-valued, a deep equality check
 * of array entries or object key-value pairs is performed.
 * @param {*} a The first input.
 * @param {*} b The second input.
 * @return {boolean} True if equal, false if not.
 */
export default function equal(a: any, b: any): boolean;
