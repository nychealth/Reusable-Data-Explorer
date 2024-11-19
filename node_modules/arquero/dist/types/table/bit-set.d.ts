/**
 * Represent an indexable set of bits.
 */
export default class BitSet {
    /**
     * Instantiate a new BitSet instance.
     * @param {number} size The number of bits.
     */
    constructor(size: number);
    _size: number;
    _bits: Uint32Array;
    /**
     * The number of bits.
     * @return {number}
     */
    get length(): number;
    /**
     * The number of bits set to one.
     * https://graphics.stanford.edu/~seander/bithacks.html#CountBitsSetKernighan
     * @return {number}
     */
    count(): number;
    /**
     * Get the bit at a given index.
     * @param {number} i The bit index.
     */
    get(i: number): number;
    /**
     * Set the bit at a given index to one.
     * @param {number} i The bit index.
     */
    set(i: number): void;
    /**
     * Clear the bit at a given index to zero.
     * @param {number} i The bit index.
     */
    clear(i: number): void;
    /**
     * Scan the bits, invoking a callback function with the index of
     * each non-zero bit.
     * @param {(i: number) => void} fn A callback function.
     */
    scan(fn: (i: number) => void): void;
    /**
     * Get the next non-zero bit starting from a given index.
     * @param {number} i The bit index.
     */
    next(i: number): number;
    /**
     * Return the index of the nth non-zero bit.
     * @param {number} n The number of non-zero bits to advance.
     * @return {number} The index of the nth non-zero bit.
     */
    nth(n: number): number;
    /**
     * Negate all bits in this bitset.
     * Modifies this BitSet in place.
     * @return {this}
     */
    not(): this;
    /**
     * Compute the logical AND of this BitSet and another.
     * @param {BitSet} bitset The BitSet to combine with.
     * @return {BitSet} This BitSet updated with the logical AND.
     */
    and(bitset: BitSet): BitSet;
    /**
     * Compute the logical OR of this BitSet and another.
     * @param {BitSet} bitset The BitSet to combine with.
     * @return {BitSet} This BitSet updated with the logical OR.
     */
    or(bitset: BitSet): BitSet;
}
