/**
 * Regroup table rows in response to a BitSet filter.
 * @param {GroupBySpec} groups The current groupby specification.
 * @param {BitSet} filter The filter to apply.
 */
export function regroup(groups: GroupBySpec, filter: BitSet): any;
/**
 * Regroup table rows in response to a re-indexing.
 * This operation may or may not involve filtering of rows.
 * @param {GroupBySpec} groups The current groupby specification.
 * @param {Function} scan Function to scan new row indices.
 * @param {boolean} filter Flag indicating if filtering may occur.
 * @param {number} nrows The number of rows in the new table.
 */
export function reindex(groups: GroupBySpec, scan: Function, filter: boolean, nrows: number): any;
export function nest(table: any, idx: any, obj: any, type: any): any;
