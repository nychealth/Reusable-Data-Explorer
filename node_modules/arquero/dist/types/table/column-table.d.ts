/**
 * Class representing a table backed by a named set of columns.
 */
export default class ColumnTable extends Table {
    /**
     * Create a new ColumnTable from existing input data.
     * @param {object[]|Iterable<object>|object|Map} values The backing table data values.
     *  If array-valued, should be a list of JavaScript objects with
     *  key-value properties for each column value.
     *  If object- or Map-valued, a table with two columns (one for keys,
     *  one for values) will be created.
     * @param {string[]} [names] The named columns to include.
     * @return {ColumnTable} A new ColumnTable instance.
     */
    static from(values: object[] | Iterable<object> | object | Map<any, any>, names?: string[]): ColumnTable;
    /**
     * Create a new table for a set of named columns.
     * @param {object|Map} columns
     *  The set of named column arrays. Keys are column names.
     *  The enumeration order of the keys determines the column indices,
     *  unless the names parameter is specified.
     *  Values must be arrays (or array-like values) of identical length.
     * @param {string[]} [names] Ordered list of column names. If specified,
     *  this array determines the column indices. If not specified, the
     *  key enumeration order of the columns object is used.
     * @return {ColumnTable} the instantiated ColumnTable instance.
     */
    static "new"(columns: object | Map<any, any>, names?: string[]): ColumnTable;
    /**
     * Instantiate a new ColumnTable instance.
     * @param {object} columns An object mapping column names to values.
     * @param {string[]} [names] An ordered list of column names.
     * @param {BitSet} [filter] A filtering BitSet.
     * @param {GroupBySpec} [group] A groupby specification.
     * @param {RowComparator} [order] A row comparator function.
     * @param {Params} [params] An object mapping parameter names to values.
     */
    constructor(columns: object, names?: string[], filter?: BitSet, group?: GroupBySpec, order?: RowComparator, params?: Params);
    /**
     * Create a new table with the same type as this table.
     * The new table may have different data, filter, grouping, or ordering
     * based on the values of the optional configuration argument. If a
     * setting is not specified, it is inherited from the current table.
     * @param {CreateOptions} [options] Creation options for the new table.
     * @return {ColumnTable} A newly created table.
     */
    create({ data, names, filter, groups, order }?: CreateOptions): ColumnTable;
    /**
     * Create a new table with additional columns drawn from one or more input
     * tables. All tables must have the same numer of rows and are reified
     * prior to assignment. In the case of repeated column names, input table
     * columns overwrite existing columns.
     * @param {...ColumnTable} tables The tables to merge with this table.
     * @return {ColumnTable} A new table with merged columns.
     * @example table.assign(table1, table2)
     */
    assign(...tables: ColumnTable[]): ColumnTable;
    /**
     * Get the backing set of columns for this table.
     * @return {ColumnData} Object of named column instances.
     */
    columns(): ColumnData;
    /**
     * Get the column instance with the given name.
     * @param {string} name The column name.
     * @return {ColumnType | undefined} The named column, or undefined if it does not exist.
     */
    column(name: string): ColumnType | undefined;
    /**
     * Get the column instance at the given index position.
     * @param {number} index The zero-based column index.
     * @return {ColumnType | undefined} The column, or undefined if it does not exist.
     */
    columnAt(index: number): ColumnType | undefined;
    /**
     * Get an array of values contained in a column. The resulting array
     * respects any table filter or orderby criteria.
     * @param {string} name The column name.
     * @param {ArrayConstructor|import('./table').TypedArrayConstructor} [constructor=Array]
     *  The array constructor for instantiating the output array.
     * @return {import('./table').DataValue[]|import('./table).TypedArray} The array of column values.
     */
    array(name: string, constructor?: ArrayConstructor | import('./table').TypedArrayConstructor): import('./table').DataValue[] | any;
    /**
     * Returns an array of objects representing table rows.
     * @param {ObjectsOptions} [options] The options for row object generation.
     * @return {object[]} An array of row objects.
     */
    objects(options?: ObjectsOptions): object[];
    /**
     * Create a new fully-materialized instance of this table.
     * All filter and orderby settings are removed from the new table.
     * Instead, the backing data itself is filtered and ordered as needed.
     * @param {number[]} [indices] Ordered row indices to materialize.
     *  If unspecified, all rows passing the table filter are used.
     * @return {ColumnTable} A reified table.
     */
    reify(indices?: number[]): ColumnTable;
    /**
     * Apply a sequence of transformations to this table. The output
     * of each transform is passed as input to the next transform, and
     * the output of the last transform is then returned.
     * @param {...(Transform|Transform[])} transforms Transformation
     *  functions to apply to the table in sequence. Each function should
     *  take a single table as input and return a table as output.
     * @return {ColumnTable} The output of the last transform.
     */
    transform(...transforms: (Transform | Transform[])[]): ColumnTable;
    /**
     * Format this table as an Apache Arrow table.
     * @param {ArrowFormatOptions} [options] The formatting options.
     * @return {import('apache-arrow').Table} An Apache Arrow table.
     */
    toArrow(options?: ArrowFormatOptions): import('apache-arrow').Table;
    /**
     * Format this table as binary data in the Apache Arrow IPC format.
     * @param {ArrowFormatOptions} [options] The formatting options. Set {format: 'stream'}
     *        or {format:"file"} for specific IPC format
     * @return {Uint8Array} A new Uint8Array of Arrow-encoded binary data.
     */
    toArrowBuffer(options?: ArrowFormatOptions): Uint8Array;
    /**
     * Format this table as a comma-separated values (CSV) string. Other
     * delimiters, such as tabs or pipes ('|'), can be specified using
     * the options argument.
     * @param {CSVFormatOptions} [options] The formatting options.
     * @return {string} A delimited value string.
     */
    toCSV(options?: CSVFormatOptions): string;
    /**
     * Format this table as an HTML table string.
     * @param {HTMLFormatOptions} [options] The formatting options.
     * @return {string} An HTML table string.
     */
    toHTML(options?: HTMLFormatOptions): string;
    /**
     * Format this table as a JavaScript Object Notation (JSON) string.
     * @param {JSONFormatOptions} [options] The formatting options.
     * @return {string} A JSON string.
     */
    toJSON(options?: JSONFormatOptions): string;
    /**
     * Format this table as a GitHub-Flavored Markdown table string.
     * @param {MarkdownFormatOptions} [options] The formatting options.
     * @return {string} A GitHub-Flavored Markdown table string.
     */
    toMarkdown(options?: MarkdownFormatOptions): string;
}
/**
 * A table transformation.
 */
export type Transform = (table: ColumnTable) => ColumnTable;
/**
 * Proxy type for BitSet class.
 */
export type BitSet = import('./table').BitSet;
/**
 * Proxy type for ColumnType interface.
 */
export type ColumnType = import('./column').ColumnType;
/**
 * A named collection of columns.
 */
export type ColumnData = {
    [key: string]: import("./column").ColumnType;
};
/**
 * Proxy type for GroupBySpec.
 */
export type GroupBySpec = import('./table').GroupBySpec;
/**
 * Proxy type for RowComparator.
 */
export type RowComparator = import('./table').RowComparator;
/**
 * Proxy type for Params.
 */
export type Params = import('./table').Params;
/**
 * Options for Arrow formatting.
 */
export type ArrowFormatOptions = import('../arrow/encode').ArrowFormatOptions;
/**
 * Options for CSV formatting.
 */
export type CSVFormatOptions = import('../format/to-csv').CSVFormatOptions;
/**
 * Options for HTML formatting.
 */
export type HTMLFormatOptions = import('../format/to-html').HTMLFormatOptions;
/**
 * Options for JSON formatting.
 */
export type JSONFormatOptions = import('../format/to-json').JSONFormatOptions;
/**
 * Options for Markdown formatting.
 */
export type MarkdownFormatOptions = import('../format/to-markdown').MarkdownFormatOptions;
import Table from './table';
