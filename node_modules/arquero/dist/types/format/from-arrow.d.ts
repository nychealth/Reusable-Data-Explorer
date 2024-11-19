/**
 * Options for Apache Arrow import.
 * @typedef {object} ArrowOptions
 * @property {import('../table/transformable').Select} columns
 *  An ordered set of columns to import. The input may consist of column name
 *  strings, column integer indices, objects with current column names as keys
 *  and new column names as values (for renaming), or selection helper
 *  functions such as {@link all}, {@link not}, or {@link range}.
 */
/**
 * Create a new table backed by an Apache Arrow table instance.
 * @param {object} arrow An Apache Arrow data table or byte buffer.
 * @param {ArrowOptions} options Options for Arrow import.
 * @return {ColumnTable} A new table containing the imported values.
 */
export default function _default(arrow: object, options?: ArrowOptions): ColumnTable;
/**
 * Options for Apache Arrow import.
 */
export type ArrowOptions = {
    /**
     *  An ordered set of columns to import. The input may consist of column name
     *  strings, column integer indices, objects with current column names as keys
     *  and new column names as values (for renaming), or selection helper
     *  functions such as {@link all }, {@link not }, or {@link range }.
     */
    columns: import('../table/transformable').Select;
};
import ColumnTable from '../table/column-table';
