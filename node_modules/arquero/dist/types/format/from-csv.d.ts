/**
 * Options for CSV parsing.
 * @typedef {object} CSVParseOptions
 * @property {string} [delimiter=','] Single-character delimiter between values.
 * @property {string} [decimal='.'] Single-character numeric decimal separator.
 * @property {boolean} [header=true] Flag to specify presence of header row.
 *  If true, assumes the CSV contains a header row with column names. If false,
 *  indicates the CSV does not contain a header row; columns are given the
 *  names 'col1', 'col2', etc unless the *names* option is specified.
 * @property {string[]} [names] An array of column names to use for header-less
 *  CSV files. This option is ignored if the header option is true.
 * @property {number} [skip=0] The number of lines to skip before reading data.
 * @property {string} [comment] A string used to identify comment lines. Any
 *  lines that start with the comment pattern are skipped.
 * @property {boolean} [autoType=true] Flag for automatic type inference.
 * @property {number} [autoMax=1000] Maximum number of initial values to use
 *  for type inference.
 * @property {Object.<string, (value: string) => any>} [parse] Object of
 *  column parsing options. The object keys should be column names. The object
 *  values should be parsing functions that transform values upon input.
 */
/**
 * Parse a comma-separated values (CSV) string into a table. Other
 * delimiters, such as tabs or pipes ('|'), can be specified using
 * the options argument. By default, automatic type inference is performed
 * for input values; string values that match the ISO standard
 * date format are parsed into JavaScript Date objects. To disable this
 * behavior, set the autoType option to false. To perform custom parsing
 * of input column values, use the parse option.
 * @param {string} text A string in a delimited-value format.
 * @param {CSVParseOptions} options The formatting options.
 * @return {ColumnTable} A new table containing the parsed values.
 */
export default function _default(text: string, options?: CSVParseOptions): ColumnTable;
/**
 * Options for CSV parsing.
 */
export type CSVParseOptions = {
    /**
     * Single-character delimiter between values.
     */
    delimiter?: string;
    /**
     * Single-character numeric decimal separator.
     */
    decimal?: string;
    /**
     * Flag to specify presence of header row.
     * If true, assumes the CSV contains a header row with column names. If false,
     * indicates the CSV does not contain a header row; columns are given the
     * names 'col1', 'col2', etc unless the *names* option is specified.
     */
    header?: boolean;
    /**
     * An array of column names to use for header-less
     * CSV files. This option is ignored if the header option is true.
     */
    names?: string[];
    /**
     * The number of lines to skip before reading data.
     */
    skip?: number;
    /**
     * A string used to identify comment lines. Any
     * lines that start with the comment pattern are skipped.
     */
    comment?: string;
    /**
     * Flag for automatic type inference.
     */
    autoType?: boolean;
    /**
     * Maximum number of initial values to use
     * for type inference.
     */
    autoMax?: number;
    /**
     * Object of
     * column parsing options. The object keys should be column names. The object
     * values should be parsing functions that transform values upon input.
     */
    parse?: {
        [x: string]: (value: string) => any;
    };
};
import ColumnTable from '../table/column-table';
