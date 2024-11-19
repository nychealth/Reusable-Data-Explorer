/**
 * Options for CSV formatting.
 * @typedef {object} CSVFormatOptions
 * @property {string} [delimiter=','] The delimiter between values.
 * @property {number} [limit=Infinity] The maximum number of rows to print.
 * @property {number} [offset=0] The row offset indicating how many initial rows to skip.
 * @property {import('./util').ColumnSelectOptions} [columns] Ordered list
 *  of column names to include. If function-valued, the function should
 *  accept a table as input and return an array of column name strings.
 * @property {Object.<string, (value: any) => any>} [format] Object of column
 *  format options. The object keys should be column names. The object values
 *  should be formatting functions to invoke to transform column values prior
 *  to output. If specified, these override automatically inferred options.
 */
/**
 * Format a table as a comma-separated values (CSV) string. Other
 * delimiters, such as tabs or pipes ('|'), can be specified using
 * the options argument.
 * @param {ColumnTable} table The table to format.
 * @param {CSVFormatOptions} options The formatting options.
 * @return {string} A delimited-value format string.
 */
export default function _default(table: ColumnTable, options?: CSVFormatOptions): string;
/**
 * Options for CSV formatting.
 */
export type CSVFormatOptions = {
    /**
     * The delimiter between values.
     */
    delimiter?: string;
    /**
     * The maximum number of rows to print.
     */
    limit?: number;
    /**
     * The row offset indicating how many initial rows to skip.
     */
    offset?: number;
    /**
     * Ordered list
     * of column names to include. If function-valued, the function should
     * accept a table as input and return an array of column name strings.
     */
    columns?: import('./util').ColumnSelectOptions;
    /**
     * Object of column
     * format options. The object keys should be column names. The object values
     * should be formatting functions to invoke to transform column values prior
     * to output. If specified, these override automatically inferred options.
     */
    format?: {
        [x: string]: (value: any) => any;
    };
};
import ColumnTable from '../table/column-table';
