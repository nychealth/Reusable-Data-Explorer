/**
 * Column selection function.
 * @typedef {(table: Table) => string[]} ColumnSelectFunction
 */
/**
 * Column selection options.
 * @typedef {string[]|ColumnSelectFunction} ColumnSelectOptions
 */
/**
 * Column format options. The object keys should be column names.
 * The object values should be formatting functions or objects.
 * If specified, these override any automatically inferred options.
 * @typedef {Object.<string, import('./value').ValueFormatOptions} ColumnFormatOptions
 */
/**
 * Column alignment options. The object keys should be column names.
 * The object values should be aligment strings, one of 'l' (left),
 * 'c' (center), or 'r' (right).
 * If specified, these override any automatically inferred options.
 * @typedef {Object.<string, 'l'|'c'|'r'>} ColumnAlignOptions
 */
export function columns(table: any, names: any): any;
export function formats(table: any, names: any, options: any): {
    align: {};
    format: {};
};
export function scan(table: any, names: any, limit: number, offset: any, ctx: any): void;
/**
 * Column selection function.
 */
export type ColumnSelectFunction = (table: Table) => string[];
/**
 * Column selection options.
 */
export type ColumnSelectOptions = string[] | ColumnSelectFunction;
/**
 * Column format options. The object keys should be column names.
 * The object values should be formatting functions or objects.
 * If specified, these override any automatically inferred options.
 */
export type ColumnFormatOptions = {
    [x: string]: import('./value').ValueFormatOptions;
};
/**
 * Column alignment options. The object keys should be column names.
 * The object values should be aligment strings, one of 'l' (left),
 * 'c' (center), or 'r' (right).
 * If specified, these override any automatically inferred options.
 */
export type ColumnAlignOptions = {
    [x: string]: 'l' | 'c' | 'r';
};
import Table from '../table/table';
