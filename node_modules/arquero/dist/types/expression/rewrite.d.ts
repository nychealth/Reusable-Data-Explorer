/**
 * Rewrite AST node to be a table column reference.
 * Additionally optimizes dictionary column operations.
 * @param {object} ref AST node to rewrite to a column reference.
 * @param {string} name The name of the column.
 * @param {number} index The table index of the column.
 * @param {object} col The actual table column instance.
 * @param {object} op Parent AST node operating on the column reference.
 */
export default function _default(ref: object, name: string, index: number, col: object, op: object): any;
