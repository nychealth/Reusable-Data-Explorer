/**
 * Create an Arquero column that proxies access to an Arrow column.
 * @param {object} arrow An Apache Arrow column.
 * @return {import('../table/column').ColumnType} An Arquero-compatible column.
 */
export default function arrowColumn(vector: any, nested: any): import('../table/column').ColumnType;
