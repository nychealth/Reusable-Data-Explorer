/**
 * Format a table as a JavaScript Object Notation (JSON) string.
 * @param {ColumnTable} table The table to format.
 * @param {JSONFormatOptions} options The formatting options.
 * @return {string} A JSON string.
 */
export default function _default(table: ColumnTable, options?: JSONFormatOptions): string;
/**
 * Options for JSON formatting.
 */
export type JSONFormatOptions = {
    /**
     * The maximum number of rows to print.
     */
    limit?: number;
    /**
     * The row offset indicating how many initial
     * rows to skip.
     */
    offset?: number;
    /**
     * Flag indicating if table schema metadata
     * should be included in the JSON output. If false, only the data payload
     * is included.
     */
    schema?: boolean;
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
