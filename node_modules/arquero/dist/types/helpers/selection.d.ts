export default function resolve(table: any, sel: any, map?: Map<any, any>): Map<any, any>;
/**
 * Proxy type for SelectHelper function.
 * @typedef {import('../table/transformable').SelectHelper} SelectHelper
 */
/**
 * Select all columns in a table.
 * Returns a function-valued selection compatible with {@link Table#select}.
 * @return {SelectHelper} Selection function compatible with select().
 */
export function all(): SelectHelper;
/**
 * Negate a column selection, selecting all other columns in a table.
 * Returns a function-valued selection compatible with {@link Table#select}.
 * @param {...any} selection The selection to negate. May be a column name,
 *  column index, array of either, or a selection function (e.g., from range).
 * @return {SelectHelper} Selection function compatible with select().
 */
export function not(...selection: any[]): SelectHelper;
/**
 * Select a contiguous range of columns.
 * @param {string|number} start The name/index of the first selected column.
 * @param {string|number} end The name/index of the last selected column.
 * @return {SelectHelper} Selection function compatible with select().
 */
export function range(start: string | number, end: string | number): SelectHelper;
/**
 * Select all columns whose names match a pattern.
 * @param {string|RegExp} pattern A string or regular expression pattern to match.
 * @return {SelectHelper} Selection function compatible with select().
 */
export function matches(pattern: string | RegExp): SelectHelper;
/**
 * Select all columns whose names start with a string.
 * @param {string} string The string to match at the start of the column name.
 * @return {SelectHelper} Selection function compatible with select().
 */
export function startswith(string: string): SelectHelper;
/**
 * Select all columns whose names end with a string.
 * @param {string} string The string to match at the end of the column name.
 * @return {SelectHelper} Selection function compatible with select().
 */
export function endswith(string: string): SelectHelper;
/**
 * Proxy type for SelectHelper function.
 */
export type SelectHelper = import('../table/transformable').SelectHelper;
