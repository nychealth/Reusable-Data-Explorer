/**
 * Null format function.
 * @callback NullFormat
 * @param {null|undefined} [value] The value to format.
 * @return {string} The formatted HTML string.
 */
/**
 * CSS style function.
 * @callback StyleFunction
 * @param {string} name The column name.
 * @param {number} row The table row index.
 * @return {string} A CSS style string.
 */
/**
 * CSS style options.
 * @typedef {Object.<string, string | StyleFunction>} StyleOptions
 */
/**
 * Options for HTML formatting.
 * @typedef {object} HTMLFormatOptions
 * @property {number} [limit=Infinity] The maximum number of rows to print.
 * @property {number} [offset=0] The row offset indicating how many initial rows to skip.
 * @property {import('./util').ColumnSelectOptions} [columns] Ordered list
 *  of column names to include. If function-valued, the function should
 *  accept a table as input and return an array of column name strings.
 * @property {import('./util').ColumnAlignOptions} [align] Object of column
 *  alignment options. The object keys should be column names. The object
 *  values should be aligment strings, one of 'l' (left), 'c' (center), or
 *  'r' (right). If specified, these override automatically inferred options.
 * @property {import('./util').ColumnFormatOptions} [format] Object of column
 *  format options. The object keys should be column names. The object values
 *  should be formatting functions or specification objects. If specified,
 *  these override automatically inferred options.
 * @property {NullFormat} [null] Format function for null or undefined values.
 *  If specified, this function will be invoked with the null or undefined
 *  value as the sole input, and the return value will be used as the HTML
 *  output for the value.
 * @property {StyleOptions} [style] CSS styles to include in HTML output.
 *  The object keys should be HTML table tag names: 'table', 'thead',
 *  'tbody', 'tr', 'th', or 'td'. The object values should be strings of
 *  valid CSS style directives (such as "font-weight: bold;") or functions
 *  that take a column name and row as inputs and return a CSS string.
 * @property {number} [maxdigits=6] The maximum number of fractional digits
 *  to include when formatting numbers. This option is passed to the format
 *  inference method and is overridden by any explicit format options.
 */
/**
 * Format a table as an HTML table string.
 * @param {ColumnTable} table The table to format.
 * @param {HTMLFormatOptions} options The formatting options.
 * @return {string} An HTML table string.
 */
export default function _default(table: ColumnTable, options?: HTMLFormatOptions): string;
/**
 * Null format function.
 */
export type NullFormat = (value?: null | undefined) => string;
/**
 * CSS style function.
 */
export type StyleFunction = (name: string, row: number) => string;
/**
 * CSS style options.
 */
export type StyleOptions = {
    [x: string]: string | StyleFunction;
};
/**
 * Options for HTML formatting.
 */
export type HTMLFormatOptions = {
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
     * alignment options. The object keys should be column names. The object
     * values should be aligment strings, one of 'l' (left), 'c' (center), or
     * 'r' (right). If specified, these override automatically inferred options.
     */
    align?: import('./util').ColumnAlignOptions;
    /**
     * Object of column
     * format options. The object keys should be column names. The object values
     * should be formatting functions or specification objects. If specified,
     * these override automatically inferred options.
     */
    format?: import('./util').ColumnFormatOptions;
    /**
     * Format function for null or undefined values.
     * If specified, this function will be invoked with the null or undefined
     * value as the sole input, and the return value will be used as the HTML
     * output for the value.
     */
    null?: NullFormat;
    /**
     * CSS styles to include in HTML output.
     * The object keys should be HTML table tag names: 'table', 'thead',
     * 'tbody', 'tr', 'th', or 'td'. The object values should be strings of
     * valid CSS style directives (such as "font-weight: bold;") or functions
     * that take a column name and row as inputs and return a CSS string.
     */
    style?: StyleOptions;
    /**
     * The maximum number of fractional digits
     * to include when formatting numbers. This option is passed to the format
     * inference method and is overridden by any explicit format options.
     */
    maxdigits?: number;
};
import ColumnTable from '../table/column-table';
