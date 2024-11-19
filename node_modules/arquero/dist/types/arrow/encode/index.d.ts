/**
 * Options for Arrow encoding.
 * @typedef {object} ArrowFormatOptions
 * @property {number} [limit=Infinity] The maximum number of rows to include.
 * @property {number} [offset=0] The row offset indicating how many initial
 *  rows to skip.
 * @property {string[]|(data: object) => string[]} [columns] Ordered list of
 *  column names to include. If function-valued, the function should accept
 *  a dataset as input and return an array of column name strings.
 * @property {object} [types] The Arrow data types to use. If specified,
 *  the input should be an object with column names for keys and Arrow data
 *  types for values. If a column type is not explicitly provided, type
 *  inference will be performed to guess an appropriate type.
 */
/**
 * Create an Apache Arrow table for an input dataset.
 * @param {Array|object} data An input dataset to convert to Arrow format.
 *  If array-valued, the data should consist of an array of objects where
 *  each entry represents a row and named properties represent columns.
 *  Otherwise, the input data should be an Arquero table.
 * @param {ArrowFormatOptions} [options] Encoding options, including
 *  column data types.
 * @return {Table} An Apache Arrow Table instance.
 */
export default function _default(data: any[] | object, options?: ArrowFormatOptions): Table;
/**
 * Options for Arrow encoding.
 */
export type ArrowFormatOptions = {
    /**
     * The maximum number of rows to include.
     */
    limit?: number;
    /**
     * The row offset indicating how many initial
     * rows to skip.
     */
    offset?: number;
    /**
     * Ordered list of
     * column names to include. If function-valued, the function should accept
     * a dataset as input and return an array of column name strings.
     */
    columns?: string[] | ((data: object) => string[]);
    /**
     * The Arrow data types to use. If specified,
     * the input should be an object with column names for keys and Arrow data
     * types for values. If a column type is not explicitly provided, type
     * inference will be performed to guess an appropriate type.
     */
    types?: object;
};
import { Table } from 'apache-arrow';
