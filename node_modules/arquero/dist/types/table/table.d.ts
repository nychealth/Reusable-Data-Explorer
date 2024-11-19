/**
 * Abstract class representing a data table.
 */
export default class Table extends Transformable {
    /**
     * Instantiate a new Table instance.
     * @param {string[]} names An ordered list of column names.
     * @param {number} nrows The number of rows.
     * @param {TableData} data The backing data, which can vary by implementation.
     * @param {BitSet} [filter] A bit mask for which rows to include.
     * @param {GroupBySpec} [groups] A groupby specification for grouping ows.
     * @param {RowComparator} [order] A comparator function for sorting rows.
     * @param {Params} [params] Parameter values for table expressions.
     */
    constructor(names: string[], nrows: number, data: TableData, filter?: BitSet, groups?: GroupBySpec, order?: RowComparator, params?: Params);
    _names: readonly string[];
    _data: any;
    _total: number;
    _nrows: number;
    _mask: import("./bit-set").default;
    _group: GroupBySpec;
    _order: RowComparator;
    /**
     * Create a new table with the same type as this table.
     * The new table may have different data, filter, grouping, or ordering
     * based on the values of the optional configuration argument. If a
     * setting is not specified, it is inherited from the current table.
     * @param {CreateOptions} [options] Creation options for the new table.
     * @return {this} A newly created table.
     */
    create(options?: CreateOptions): this;
    /**
     * Indicates if the table has a filter applied.
     * @return {boolean} True if filtered, false otherwise.
     */
    isFiltered(): boolean;
    /**
     * Indicates if the table has a groupby specification.
     * @return {boolean} True if grouped, false otherwise.
     */
    isGrouped(): boolean;
    /**
     * Indicates if the table has a row order comparator.
     * @return {boolean} True if ordered, false otherwise.
     */
    isOrdered(): boolean;
    /**
     * Returns the internal table storage data structure.
     * @return {TableData} The backing table storage data structure.
     */
    data(): TableData;
    /**
     * Returns the filter bitset mask, if defined.
     * @return {BitSet} The filter bitset mask.
     */
    mask(): BitSet;
    /**
     * Returns the groupby specification, if defined.
     * @return {GroupBySpec} The groupby specification.
     */
    groups(): GroupBySpec;
    /**
     * Returns the row order comparator function, if specified.
     * @return {RowComparator} The row order comparator function.
     */
    comparator(): RowComparator;
    /**
     * The total number of rows in this table, counting both
     * filtered and unfiltered rows.
     * @return {number} The number of total rows.
     */
    totalRows(): number;
    /**
     * The number of active rows in this table. This number may be
     * less than the total rows if the table has been filtered.
     * @see Table.totalRows
     * @return {number} The number of rows.
     */
    numRows(): number;
    /**
     * The number of active rows in this table. This number may be
     * less than the total rows if the table has been filtered.
     * @see Table.totalRows
     * @return {number} The number of rows.
     */
    get size(): number;
    /**
     * The number of columns in this table.
     * @return {number} The number of columns.
     */
    numCols(): number;
    /**
     * Filter function invoked for each column name.
     * @callback NameFilter
     * @param {string} name The column name.
     * @param {number} index The column index.
     * @param {string[]} array The array of names.
     * @return {boolean} Returns true to retain the column name.
     */
    /**
     * The table column names, optionally filtered.
     * @param {NameFilter} [filter] An optional filter function.
     *  If unspecified, all column names are returned.
     * @return {string[]} An array of matching column names.
     */
    columnNames(filter?: (name: string, index: number, array: string[]) => boolean): string[];
    /**
     * The column name at the given index.
     * @param {number} index The column index.
     * @return {string} The column name,
     *  or undefined if the index is out of range.
     */
    columnName(index: number): string;
    /**
     * The column index for the given name.
     * @param {string} name The column name.
     * @return {number} The column index, or -1 if the name is not found.
     */
    columnIndex(name: string): number;
    /**
     * Deprecated alias for the table array() method: use table.array()
     * instead. Get an array of values contained in a column. The resulting
     * array respects any table filter or orderby criteria.
     * @param {string} name The column name.
     * @param {ArrayConstructor|TypedArrayConstructor} [constructor=Array]
     *  The array constructor for instantiating the output array.
     * @return {DataValue[]|TypedArray} The array of column values.
     */
    columnArray(name: string, constructor?: ArrayConstructor | TypedArrayConstructor): DataValue[] | TypedArray;
    /**
     * Get an array of values contained in a column. The resulting array
     * respects any table filter or orderby criteria.
     * @param {string} name The column name.
     * @param {ArrayConstructor|TypedArrayConstructor} [constructor=Array]
     *  The array constructor for instantiating the output array.
     * @return {DataValue[]|TypedArray} The array of column values.
     */
    array(name: string, constructor?: ArrayConstructor | TypedArrayConstructor): DataValue[] | TypedArray;
    /**
     * Returns an iterator over column values.
     * @return {Iterator<object>} An iterator over row objects.
     */
    values(name: any): Iterator<object>;
    /**
     * Get the value for the given column and row.
     * @param {string} name The column name.
     * @param {number} [row=0] The row index, defaults to zero if not specified.
     * @return {DataValue} The data value at (column, row).
     */
    get(name: string, row?: number): DataValue;
    /**
     * Returns an accessor ("getter") function for a column. The returned
     * function takes a row index as its single argument and returns the
     * corresponding column value.
     * @param {string} name The column name.
     * @return {ColumnGetter} The column getter function.
     */
    getter(name: string): ColumnGetter;
    /**
     * Returns an array of objects representing table rows.
     * @param {ObjectsOptions} [options] The options for row object generation.
     * @return {RowObject[]} An array of row objects.
     */
    objects(options?: ObjectsOptions): RowObject[];
    /**
     * Returns an object representing a table row.
     * @param {number} [row=0] The row index, defaults to zero if not specified.
     * @return {object} A row object with named properties for each column.
     */
    object(row?: number): object;
    /**
     * Print the contents of this table using the console.table() method.
     * @param {PrintOptions|number} options The options for row object
     *  generation, determining which rows and columns are printed. If
     *  number-valued, specifies the row limit.
     * @return {this} The table instance.
     */
    print(options?: PrintOptions | number): this;
    /**
     * Returns an array of indices for all rows passing the table filter.
     * @param {boolean} [order=true] A flag indicating if the returned
     *  indices should be sorted if this table is ordered. If false, the
     *  returned indices may or may not be sorted.
     * @return {Uint32Array} An array of row indices.
     */
    indices(order?: boolean): Uint32Array;
    _index: Uint32Array;
    /**
     * Returns an array of indices for each group in the table.
     * If the table is not grouped, the result is the same as
     * {@link indices}, but wrapped within an array.
     * @param {boolean} [order=true] A flag indicating if the returned
     *  indices should be sorted if this table is ordered. If false, the
     *  returned indices may or may not be sorted.
     * @return {number[][]} An array of row index arrays, one per group.
     *  The indices will be filtered if the table is filtered.
     */
    partitions(order?: boolean): number[][];
    _partitions: any[];
    /**
     * Callback function to cancel a table scan.
     * @callback ScanStop
     * @return {void}
     */
    /**
     * Callback function invoked for each row of a table scan.
     * @callback ScanVisitor
     * @param {number} [row] The table row index.
     * @param {TableData} [data] The backing table data store.
     * @param {ScanStop} [stop] Function to stop the scan early.
     *  Callees can invoke this function to prevent future calls.
     * @return {void}
     */
    /**
     * Perform a table scan, visiting each row of the table.
     * If this table is filtered, only rows passing the filter are visited.
     * @param {ScanVisitor} fn Callback invoked for each row of the table.
     * @param {boolean} [order=false] Indicates if the table should be
     *  scanned in the order determined by {@link Table#orderby}. This
     *  argument has no effect if the table is unordered.
     * @property {number} [limit=Infinity] The maximum number of objects to create.
     * @property {number} [offset=0] The row offset indicating how many initial rows to skip.
     */
    scan(fn: (row?: number, data?: TableData, stop?: () => void) => void, order?: boolean, limit?: number, offset?: number): void;
    /**
     * Extract rows with indices from start to end (end not included), where
     * start and end represent per-group ordered row numbers in the table.
     * @param {number} [start] Zero-based index at which to start extraction.
     *  A negative index indicates an offset from the end of the group.
     *  If start is undefined, slice starts from the index 0.
     * @param {number} [end] Zero-based index before which to end extraction.
     *  A negative index indicates an offset from the end of the group.
     *  If end is omitted, slice extracts through the end of the group.
     * @return {this} A new table with sliced rows.
     * @example table.slice(1, -1)
     */
    slice(start?: number, end?: number): this;
    /**
     * Reduce a table, processing all rows to produce a new table.
     * To produce standard aggregate summaries, use {@link rollup}.
     * This method allows the use of custom reducer implementations,
     * for example to produce multiple rows for an aggregate.
     * @param {Reducer} reducer The reducer to apply.
     * @return {Table} A new table of reducer outputs.
     */
    reduce(reducer: Reducer): Table;
    /**
     * Provide an informative object string tag.
     */
    get [Symbol.toStringTag](): string;
    /**
     * Returns an iterator over objects representing table rows.
     * @return {Iterator<object>} An iterator over row objects.
     */
    [Symbol.iterator](): Iterator<object>;
}
/**
 * A typed array constructor.
 */
export type TypedArrayConstructor = Uint8ArrayConstructor | Uint16ArrayConstructor | Uint32ArrayConstructor | BigUint64ArrayConstructor | Int8ArrayConstructor | Int16ArrayConstructor | Int32ArrayConstructor | BigInt64ArrayConstructor | Float32ArrayConstructor | Float64ArrayConstructor;
/**
 * A typed array instance.
 */
export type TypedArray = Uint8Array | Uint16Array | Uint32Array | BigUint64Array | Int8Array | Int16Array | Int32Array | BigInt64Array | Float32Array | Float64Array;
/**
 * Backing table data.
 */
export type TableData = object | any[];
/**
 * Table value.
 */
export type DataValue = any;
/**
 * Table row object.
 */
export type RowObject = {
    [x: string]: DataValue;
};
/**
 * Table expression parameters.
 */
export type Params = import('./transformable').Params;
/**
 * Proxy type for BitSet class.
 */
export type BitSet = import('./bit-set').default;
/**
 * A table groupby specification.
 */
export type GroupBySpec = {
    /**
     * The number of groups.
     */
    size: number;
    /**
     * Column names for each group.
     */
    names: string[];
    /**
     * Value accessor functions for each group.
     */
    get: RowExpression[];
    /**
     * Indices of an example table row for each group.
     */
    rows: number[];
    /**
     * Per-row group indices, length is total rows of table.
     */
    keys: number[];
};
/**
 * Column value accessor.
 */
export type ColumnGetter = (row?: number) => DataValue;
/**
 * An expression evaluated over a table row.
 */
export type RowExpression = (row?: number, data?: TableData) => DataValue;
/**
 * Comparator function for sorting table rows.
 */
export type RowComparator = (rowA: number, rowB: number, data: TableData) => number;
/**
 * Options for derived table creation.
 */
export type CreateOptions = {
    /**
     * The backing column data.
     */
    data?: TableData;
    /**
     * An ordered list of column names.
     */
    names?: string[];
    /**
     * An additional filter BitSet to apply.
     */
    filter?: BitSet;
    /**
     * The groupby specification to use, or null for no groups.
     */
    groups?: GroupBySpec;
    /**
     * The orderby comparator function to use, or null for no order.
     */
    order?: RowComparator;
};
/**
 * Options for generating row objects.
 */
export type PrintOptions = {
    /**
     * The maximum number of objects to create.
     */
    limit?: number;
    /**
     * The row offset indicating how many initial rows to skip.
     */
    offset?: number;
    /**
     * An ordered set of columns to include. The input may consist of column name
     * strings, column integer indices, objects with current column names as keys
     * and new column names as values (for renaming), or selection helper
     * functions such as {@link all }, {@link not }, or {@link range }.
     */
    columns?: import('../table/transformable').Select;
};
/**
 * Options for generating row objects.
 */
export type ObjectsOptions = {
    /**
     * The maximum number of objects to create.
     */
    limit?: number;
    /**
     * The row offset indicating how many initial rows to skip.
     */
    offset?: number;
    /**
     * An ordered set of columns to include. The input may consist of column name
     * strings, column integer indices, objects with current column names as keys
     * and new column names as values (for renaming), or selection helper
     * functions such as {@link all }, {@link not }, or {@link range }.
     */
    columns?: import('../table/transformable').Select;
    /**
     * The export format for groups of rows. The default (false) is to ignore
     * groups, returning a flat array of objects. The valid values are 'map' or
     * true (for Map instances), 'object' (for standard objects), or 'entries'
     * (for arrays in the style of Object.entries). For the 'object' format,
     * groupby keys are coerced to strings to use as object property names; note
     * that this can lead to undesirable behavior if the groupby keys are object
     * values. The 'map' and 'entries' options preserve the groupby key values.
     */
    grouped?: 'map' | 'entries' | 'object' | boolean;
};
import Transformable from './transformable';
