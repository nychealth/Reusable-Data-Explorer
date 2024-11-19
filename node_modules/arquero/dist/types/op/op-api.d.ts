export function any(field: any): import("./op").Op;
export function count(): import("./op").Op;
export function array_agg(field: any): import("./op").Op;
export function array_agg_distinct(field: any): import("./op").Op;
export function map_agg(key: any, value: any): import("./op").Op;
export function object_agg(key: any, value: any): import("./op").Op;
export function entries_agg(key: any, value: any): import("./op").Op;
declare const _default: {
    /**
     * Generate an object representing the current table row.
     * @param {...string} names The column names to include in the object.
     *  If unspecified, all columns are included.
     * @return {Struct} The generated row object.
     */
    row_object: (...names: string[]) => Struct;
    /**
     * Aggregate function to count the number of records (rows).
     * @returns {number} The count of records.
     */
    count: () => import("./op").Op;
    /**
     * Aggregate function returning an arbitrary observed value.
     * @param {*} field The data field.
     * @return {*} An arbitrary observed value.
     */
    any: (field: any) => import("./op").Op;
    /**
     * Aggregate function to collect an array of values.
     * @param {*} field The data field.
     * @return {Array} A list of values.
     */
    array_agg: (field: any) => import("./op").Op;
    /**
     * Aggregate function to collect an array of distinct (unique) values.
     * @param {*} field The data field.
     * @return {Array} An array of unique values.
     */
    array_agg_distinct: (field: any) => import("./op").Op;
    /**
     * Aggregate function to create an object given input key and value fields.
     * @param {*} key The object key field.
     * @param {*} value The object value field.
     * @return {Struct} An object of key-value pairs.
     */
    object_agg: (key: any, value: any) => import("./op").Op;
    /**
     * Aggregate function to create a Map given input key and value fields.
     * @param {*} key The object key field.
     * @param {*} value The object value field.
     * @return {Map} A Map of key-value pairs.
     */
    map_agg: (key: any, value: any) => import("./op").Op;
    /**
     * Aggregate function to create an array in the style of Object.entries()
     * given input key and value fields.
     * @param {*} key The object key field.
     * @param {*} value The object value field.
     * @return {[[any, any]]} An array of [key, value] arrays.
     */
    entries_agg: (key: any, value: any) => import("./op").Op;
    /**
     * Aggregate function to count the number of valid values.
     * Invalid values are null, undefined, or NaN.
     * @param {*} field The data field.
     * @return {number} The count of valid values.
     */
    valid: (field: any) => number;
    /**
     * Aggregate function to count the number of invalid values.
     * Invalid values are null, undefined, or NaN.
     * @param {*} field The data field.
     * @return {number} The count of invalid values.
     */
    invalid: (field: any) => number;
    /**
     * Aggregate function to count the number of distinct values.
     * @param {*} field The data field.
     * @return {number} The count of distinct values.
     */
    distinct: (field: any) => number;
    /**
     * Aggregate function to determine the mode (most frequent) value.
     * @param {*} field The data field.
     * @return {number} The mode value.
     */
    mode: (field: any) => number;
    /**
     * Aggregate function to sum values.
     * @param {string} field The data field.
     * @return {number} The sum of the values.
     */
    sum: (field: string) => number;
    /**
     * Aggregate function to multiply values.
     * @param {*} field The data field.
     * @return {number} The product of the values.
     */
    product: (field: any) => number;
    /**
     * Aggregate function for the mean (average) value.
     * @param {*} field The data field.
     * @return {number} The mean (average) of the values.
     */
    mean: (field: any) => number;
    /**
     * Aggregate function for the average (mean) value.
     * @param {*} field The data field.
     * @return {number} The average (mean) of the values.
     */
    average: (field: any) => number;
    /**
     * Aggregate function for the sample variance.
     * @param {*} field The data field.
     * @return {number} The sample variance of the values.
     */
    variance: (field: any) => number;
    /**
     * Aggregate function for the population variance.
     * @param {*} field The data field.
     * @return {number} The population variance of the values.
     */
    variancep: (field: any) => number;
    /**
     * Aggregate function for the sample standard deviation.
     * @param {*} field The data field.
     * @return {number} The sample standard deviation of the values.
     */
    stdev: (field: any) => number;
    /**
     * Aggregate function for the population standard deviation.
     * @param {*} field The data field.
     * @return {number} The population standard deviation of the values.
     */
    stdevp: (field: any) => number;
    /**
     * Aggregate function for the minimum value.
     * @param {*} field The data field.
     * @return {number} The minimum value.
     */
    min: (field: any) => number;
    /**
     * Aggregate function for the maximum value.
     * @param {*} field The data field.
     * @return {number} The maximum value.
     */
    max: (field: any) => number;
    /**
     * Aggregate function to compute the quantile boundary
     * of a data field for a probability threshold.
     * @param {*} field The data field.
     * @param {number} p The probability threshold.
     * @return {number} The quantile value.
     */
    quantile: (field: any, p: number) => number;
    /**
     * Aggregate function for the median value.
     * This is a shorthand for the 0.5 quantile value.
     * @param {*} field The data field.
     * @return {number} The median value.
     */
    median: (field: any) => number;
    /**
     * Aggregate function for the sample covariance between two variables.
     * @param {*} field1 The first data field.
     * @param {*} field2 The second data field.
     * @return {number} The sample covariance of the values.
     */
    covariance: (field1: any, field2: any) => number;
    /**
     * Aggregate function for the population covariance between two variables.
     * @param {*} field1 The first data field.
     * @param {*} field2 The second data field.
     * @return {number} The population covariance of the values.
     */
    covariancep: (field1: any, field2: any) => number;
    /**
     * Aggregate function for the product-moment correlation between two variables.
     * To instead compute a rank correlation, compute the average ranks for each
     * variable and then apply this function to the result.
     * @param {*} field1 The first data field.
     * @param {*} field2 The second data field.
     * @return {number} The correlation between the field values.
     */
    corr: (field1: any, field2: any) => number;
    /**
     * Aggregate function for calculating a binning scheme in terms of
     * the minimum bin boundary, maximum bin boundary, and step size.
     * @param {*} field The data field.
     * @param {number} [maxbins=15] The maximum number of allowed bins.
     * @param {boolean} [nice=true] Flag indicating if the bin min and max
     *  should snap to "nice" human-friendly values.
     * @param {number} [minstep] The minimum allowed step size between bins.
     * @param {number} [step] The exact step size to use between bins.
     *  If specified, the maxbins and minstep arguments are ignored.
     * @return {[number, number, number]} The bin [min, max, and step] values.
     */
    bins: (field: any, maxbins?: number, nice?: boolean, minstep?: number) => [number, number, number];
    /**
     * Window function to assign consecutive row numbers, starting from 1.
     * @return {number} The row number value.
     */
    row_number: () => number;
    /**
     * Window function to assign a rank to each value in a group, starting
     * from 1. Peer values are assigned the same rank. Subsequent ranks
     * reflect the number of prior values: if the first two values tie for
     * rank 1, the third value is assigned rank 3.
     * @return {number} The rank value.
     */
    rank: () => number;
    /**
     * Window function to assign a fractional (average) rank to each value in
     * a group, starting from 1. Peer values are assigned the average of their
     * indices: if the first two values tie, both will be assigned rank 1.5.
     * @return {number} The peer-averaged rank value.
     */
    avg_rank: () => number;
    /**
     * Window function to assign a dense rank to each value in a group,
     * starting from 1. Peer values are assigned the same rank. Subsequent
     * ranks do not reflect the number of prior values: if the first two
     * values tie for rank 1, the third value is assigned rank 2.
     * @return {number} The dense rank value.
     */
    dense_rank: () => number;
    /**
     * Window function to assign a percentage rank to each value in a group.
     * The percent is calculated as (rank - 1) / (group_size - 1).
     * @return {number} The percentage rank value.
     */
    percent_rank: () => number;
    /**
     * Window function to assign a cumulative distribution value between 0 and 1
     * to each value in a group.
     * @return {number} The cumulative distribution value.
     */
    cume_dist: () => number;
    /**
     * Window function to assign a quantile (e.g., percentile) value to each
     * value in a group. Accepts an integer parameter indicating the number of
     * buckets to use (e.g., 100 for percentiles, 5 for quintiles).
     * @param {number} num The number of buckets for ntile calculation.
     * @return {number} The quantile value.
     */
    ntile: (num: number) => number;
    /**
     * Window function to assign a value that precedes the current value by
     * a specified number of positions. If no such value exists, returns a
     * default value instead.
     * @param {*} field The data field.
     * @param {number} [offset=1] The lag offset from the current value.
     * @param {*} [defaultValue=undefined] The default value.
     * @return {*} The lagging value.
     */
    lag: (field: any, offset?: number, defaultValue?: any) => any;
    /**
     * Window function to assign a value that follows the current value by
     * a specified number of positions. If no such value exists, returns a
     * default value instead.
     * @param {*} field The data field.
     * @param {number} [offset=1] The lead offset from the current value.
     * @param {*} [defaultValue=undefined] The default value.
     * @return {*} The leading value.
     */
    lead: (field: any, offset?: number, defaultValue?: any) => any;
    /**
     * Window function to assign the first value in a sliding window frame.
     * @param {*} field The data field.
     * @return {*} The first value in the current frame.
     */
    first_value: (field: any) => any;
    /**
     * Window function to assign the last value in a sliding window frame.
     * @param {*} field The data field.
     * @return {*} The last value in the current frame.
     */
    last_value: (field: any) => any;
    /**
     * Window function to assign the nth value in a sliding window frame
     * (counting from 1), or undefined if no such value exists.
     * @param {*} field The data field.
     * @param {number} nth The nth position, starting from 1.
     * @return {*} The nth value in the current frame.
     */
    nth_value: (field: any, nth: number) => any;
    /**
     * Window function to fill in missing values with preceding values.
     * @param {*} field The data field.
     * @param {*} [defaultValue=undefined] The default value.
     * @return {*} The current value if valid, otherwise the first preceding
     *  valid value. If no such value exists, returns the default value.
     */
    fill_down: (field: any, defaultValue?: any) => any;
    /**
     * Window function to fill in missing values with subsequent values.
     * @param {*} field The data field.
     * @param {*} [defaultValue=undefined] The default value.
     * @return {*} The current value if valid, otherwise the first subsequent
     *  valid value. If no such value exists, returns the default value.
     */
    fill_up: (field: any, defaultValue?: any) => any;
    parse_date: (str: any) => any;
    parse_float: (str: any) => any;
    parse_int: (str: any, radix: any) => any;
    endswith: (str: any, search: any, length: any) => boolean;
    match: (str: any, regexp: any, index: any) => any;
    normalize: (str: any, form: any) => any;
    padend: (str: any, len: any, fill: any) => any;
    padstart: (str: any, len: any, fill: any) => any;
    upper: (str: any) => any;
    lower: (str: any) => any;
    /**
     * Aggregate function returning an arbitrary observed value.
     * @param {*} field The data field.
     * @return {*} An arbitrary observed value.
     */
    repeat: (str: any, num: any) => any;
    replace: (str: any, pattern: any, replacement: any) => any;
    substring: (str: any, start: any, end: any) => any;
    split: (str: any, separator: any, limit: any) => string[];
    startswith: (str: any, search: any, length: any) => boolean;
    trim: (str: any) => any;
    has: (obj: any, key: any) => any;
    keys: (obj: any) => any[];
    values: (obj: any) => any[];
    entries: (obj: any) => any[];
    object: (entries: any) => {
        [k: string]: any;
    };
    random: typeof import("../util/random").random;
    is_nan: (number: unknown) => boolean;
    is_finite: (number: unknown) => boolean;
    abs: (x: number) => number;
    cbrt: (x: number) => number;
    ceil: (x: number) => number;
    clz32: (x: number) => number;
    exp: (x: number) => number;
    expm1: (x: number) => number;
    floor: (x: number) => number;
    fround: (x: number) => number;
    greatest: (...values: number[]) => number;
    least: (...values: number[]) => number;
    log: (x: number) => number;
    log10: (x: number) => number;
    log1p: (x: number) => number;
    log2: (x: number) => number;
    pow: (x: number, y: number) => number;
    round: (x: number) => number;
    sign: (x: number) => number;
    sqrt: (x: number) => number;
    trunc: (x: number) => number;
    degrees: (rad: any) => number;
    radians: (deg: any) => number;
    acos: (x: number) => number;
    acosh: (x: number) => number;
    asin: (x: number) => number;
    asinh: (x: number) => number;
    atan: (x: number) => number;
    atan2: (y: number, x: number) => number;
    atanh: (x: number) => number;
    cos: (x: number) => number;
    cosh: (x: number) => number;
    sin: (x: number) => number;
    sinh: (x: number) => number;
    tan: (x: number) => number;
    tanh: (x: number) => number;
    parse_json: (str: any) => any;
    to_json: (val: any) => string;
    format_date: (date: any, shorten: any) => string;
    format_utcdate: (date: any, shorten: any) => string;
    timestamp: (date: any) => number;
    year: (date: any) => number; /**
     * Aggregate function to multiply values.
     * @param {*} field The data field.
     * @return {number} The product of the values.
     */
    quarter: (date: any) => number;
    month: (date: any) => number;
    date: (date: any) => number;
    dayofweek: (date: any) => number;
    hours: (date: any) => number;
    minutes: (date: any) => number;
    seconds: (date: any) => number;
    milliseconds: (date: any) => number;
    utcyear: (date: any) => number;
    utcquarter: (date: any) => number;
    utcmonth: (date: any) => number;
    utcdate: (date: any) => number;
    utcdayofweek: (date: any) => number;
    utchours: (date: any) => number;
    utcminutes: (date: any) => number;
    utcseconds: (date: any) => number;
    utcmilliseconds: (date: any) => number;
    datetime: (year?: number, month?: number, date?: number, hours?: number, minutes?: number, seconds?: number, milliseconds?: number, ...args: any[]) => number;
    dayofyear: (date: any) => number;
    week: (date: any, firstday: any) => number;
    utcdatetime: (year?: number, month?: number, date?: number, hours?: number, minutes?: number, seconds?: number, milliseconds?: number, ...args: any[]) => number;
    utcdayofyear: (date: any) => number;
    utcweek: (date: any, firstday: any) => number;
    now: () => number;
    compact: (arr: any) => any;
    concat: (...values: any[]) => any[];
    includes: (seq: any, value: any, index: any) => any;
    indexof: (seq: any, value: any) => any;
    join: (arr: any, delim: any) => any;
    lastindexof: (seq: any, value: any) => any;
    length: (seq: any) => any;
    pluck: (arr: any, prop: any) => any;
    reverse: (seq: any) => any;
    slice: (seq: any, start: any, end: any) => any;
    bin: typeof import("./functions/bin").default;
    equal: typeof import("./functions/equal").default;
    recode: typeof import("./functions/recode").default;
    sequence: typeof import("./functions/sequence").default;
};
export default _default;
export type Struct = import('../table/transformable').Struct;
