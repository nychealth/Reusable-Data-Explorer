/**
 * Escape a function or value to prevent it from being parsed and recompiled.
 * This helper can be used in lieu of single-table table expressions (which
 * are internally parsed and rewritten) to apply a JavaScript function as-is,
 * including support for closures. It can also be used to pass a constant,
 * literal value as a table expression, bypassing the parser.
 * @param {*} value A function or value to escape.
 * @return {object} A wrapper object representing the escaped value.
 * @example escape(d => d.a.toFixed(2))
 * @example escape(d => d.a * -d.b)
 */
export default function _default(value: any): object;
