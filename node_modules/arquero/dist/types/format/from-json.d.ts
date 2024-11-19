/**
 * Options for JSON parsing.
 * @typedef {object} JSONParseOptions
 * @property {boolean} [autoType=true] Flag controlling automatic type
 *  inference. If false, date parsing for input JSON strings is disabled.
 * @property {Object.<string, (value: any) => any>} [parse] Object of column
 *  parsing options. The object keys should be column names. The object values
 *  should be parsing functions that transform values upon input.
 */
/**
 * Parse JavaScript Object Notation (JSON) data into a table.
 * The expected JSON data format is an object with column names for keys
 * and column value arrays for values. By default string values that match
 * the ISO standard date format are parsed into JavaScript Date objects.
 * To disable this behavior, set the autoType option to false. To perform
 * custom parsing of input column values, use the parse option. Auto-type
 * parsing is not performed for columns with custom parse options.
 * The data payload can also be provided as the "data" property of an
 * enclosing object, with an optional "schema" property containing table
 * metadata such as a "fields" array of ordered column information.
 * @param {string|object} data A string in JSON format, or pre-parsed object.
 * @param {JSONParseOptions} options The formatting options.
 * @return {ColumnTable} A new table containing the parsed values.
 */
export default function _default(json: any, options?: JSONParseOptions): ColumnTable;
/**
 * Options for JSON parsing.
 */
export type JSONParseOptions = {
    /**
     * Flag controlling automatic type
     * inference. If false, date parsing for input JSON strings is disabled.
     */
    autoType?: boolean;
    /**
     * Object of column
     * parsing options. The object keys should be column names. The object values
     * should be parsing functions that transform values upon input.
     */
    parse?: {
        [x: string]: (value: any) => any;
    };
};
import ColumnTable from '../table/column-table';
