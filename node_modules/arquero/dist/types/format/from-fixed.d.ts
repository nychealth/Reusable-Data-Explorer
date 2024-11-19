/**
 * Options for fixed width file parsing.
 * @typedef {object} FixedParseOptions
 * @property {[number, number][]} [positions] Array of start, end indices for
 *  fixed-width columns.
 * @property {number[]} [widths] Array of fixed column widths. This option is
 *  ignored if the positions property is specified.
 * @property {string[]} [names] An array of column names. The array length
 *  should match the length of the positions array. If not specified or
 *  shorter than the positions array, default column names are generated.
 * @property {string} [decimal='.'] Single-character numeric decimal separator.
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
 * Parse a fixed-width file (FWF) string into a table. By default, automatic
 * type inference is performed for input values; string values that match the
 * ISO standard date format are parsed into JavaScript Date objects. To
 * disable this behavior, set the autoType option to false. To perform custom
 * parsing of input column values, use the parse option.
 * @param {string} text A string in a fixed-width file format.
 * @param {FixedParseOptions} options The formatting options.
 * @return {ColumnTable} A new table containing the parsed values.
 */
export default function _default(text: string, options?: FixedParseOptions): ColumnTable;
/**
 * Options for fixed width file parsing.
 */
export type FixedParseOptions = {
    /**
     * Array of start, end indices for
     * fixed-width columns.
     */
    positions?: [number, number][];
    /**
     * Array of fixed column widths. This option is
     * ignored if the positions property is specified.
     */
    widths?: number[];
    /**
     * An array of column names. The array length
     * should match the length of the positions array. If not specified or
     * shorter than the positions array, default column names are generated.
     */
    names?: string[];
    /**
     * Single-character numeric decimal separator.
     */
    decimal?: string;
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
