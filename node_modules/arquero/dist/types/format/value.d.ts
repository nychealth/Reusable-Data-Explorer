/**
 * Column format object.
 * @typedef {object} ValueFormatObject
 * @property {boolean} [utc=false] If true, format dates in UTC time.
 * @property {number} [digits=0] The number of fractional digits to include
 *  when formatting numbers.
 * @property {number} [maxlen=30] The maximum string length for formatting
 *  nested object or array values.
 */
/**
 * @callback ValueFormatFunction
 * @param {*} value The value to format.
 * @return {*} A string-coercible or JSON-compatible formatted value.
 */
/**
 * Value format options.
 * @typedef {ValueFormatObject|ValueFormatFunction} ValueFormatOptions
 */
/**
 * Format a value as a string.
 * @param {*} v The value to format.
 * @param {ValueFormatOptions} options Formatting options.
 * @return {string} The formatted string.
 */
export default function _default(v: any, options?: ValueFormatOptions): string;
/**
 * Column format object.
 */
export type ValueFormatObject = {
    /**
     * If true, format dates in UTC time.
     */
    utc?: boolean;
    /**
     * The number of fractional digits to include
     * when formatting numbers.
     */
    digits?: number;
    /**
     * The maximum string length for formatting
     * nested object or array values.
     */
    maxlen?: number;
};
export type ValueFormatFunction = (value: any) => any;
/**
 * Value format options.
 */
export type ValueFormatOptions = ValueFormatObject | ValueFormatFunction;
