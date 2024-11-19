/**
 * Get or set the default factory function for instantiating table columns.
 * @param {ColumnFactory} [factory] The new default factory.
 * @return {ColumnFactory} The current default column factory.
 */
export function columnFactory(factory?: ColumnFactory, ...args: any[]): ColumnFactory;
/**
 * Class representing an array-backed data column.
 */
export default class Column {
    /**
     * Create a new column instance.
     * @param {Array} data The backing array (or array-like object)
     *  containing the column data.
     */
    constructor(data: any[]);
    data: any[];
    /**
     * Get the length (number of rows) of the column.
     * @return {number} The length of the column array.
     */
    get length(): number;
    /**
     * Get the column value at the given row index.
     * @param {number} row The row index of the value to retrieve.
     * @return {import('./table').DataValue} The column value.
     */
    get(row: number): import('./table').DataValue;
    /**
     * Returns an iterator over the column values.
     * @return {Iterator<object>} An iterator over column values.
     */
    [Symbol.iterator](): Iterator<object>;
}
export function defaultColumnFactory(data: any): ColumnType;
/**
 * Column interface. Any object that adheres to this interface
 * can be used as a data column within a {@link ColumnTable }.
 */
export type ColumnType = {
    /**
     *  The length (number of rows) of the column.
     */
    length: number;
    /**
     *  Column value getter.
     */
    get: import('./table').ColumnGetter;
};
/**
 * Column factory function interface.
 */
export type ColumnFactory = (data: any) => ColumnType;
