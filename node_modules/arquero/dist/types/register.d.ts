/**
 * Register a custom aggregate function.
 * @param {string} name The name to use for the aggregate function.
 * @param {AggregateDef} def The aggregate operator definition.
 * @param {RegisterOptions} [options] Function registration options.
 * @throws If a function with the same name is already registered and
 *  the override option is not specified.
 */
export function addAggregateFunction(name: string, def: AggregateDef, options?: RegisterOptions): void;
/**
 * Register a custom window function.
 * @param {string} name The name to use for the window function.
 * @param {WindowDef} def The window operator definition.
 * @param {RegisterOptions} [options] Function registration options.
 * @throws If a function with the same name is already registered and
 *  the override option is not specified.
 */
export function addWindowFunction(name: string, def: WindowDef, options?: RegisterOptions): void;
/**
 * Register a function for use within table expressions.
 * If only a single argument is provided, it will be assumed to be a
 * function and the system will try to extract its name.
 * @param {string} name The name to use for the function.
 * @param {Function} fn A standard JavaScript function.
 * @param {RegisterOptions} [options] Function registration options.
 * @throws If a function with the same name is already registered and
 *  the override option is not specified, or if no name is provided
 *  and the input function is anonymous.
 */
export function addFunction(name: string, fn: Function, options?: RegisterOptions, ...args: any[]): void;
/**
 * Register a new table method. A new method will be added to the column
 * table prototype. When invoked from a table, the registered method will
 * be invoked with the table as the first argument, followed by all the
 * provided arguments.
 * @param {string} name The name of the table method.
 * @param {Function} method The table method.
 * @param {RegisterOptions} options
 */
export function addTableMethod(name: string, method: Function, options?: RegisterOptions): void;
/**
 * Register a new transformation verb.
 * @param {string} name The name of the verb.
 * @param {Function} method The verb implementation.
 * @param {ParamDef[]} params The verb parameter schema.
 * @param {RegisterOptions} options Function registration options.
 */
export function addVerb(name: string, method: Function, params: ParamDef[], options?: RegisterOptions): void;
/**
 * Add an extension package of functions, table methods, and/or verbs.
 * @param {Package|PackageBundle} bundle The package of extensions.
 * @throws If package validation fails.
 */
export function addPackage(bundle: Package | PackageBundle, options?: {}): void;
/**
 * Aggregate function definition.
 */
export type AggregateDef = import('./op/aggregate-functions').AggregateDef;
/**
 * Window function definition.
 */
export type WindowDef = import('./op/window-functions').WindowDef;
/**
 * Verb parameter definition.
 */
export type ParamDef = import('./query/verb').ParamDef;
/**
 * Verb definition.
 */
export type VerbDef = {
    /**
     * A function implementing the verb.
     */
    method: Function;
    /**
     * The verb parameter schema.
     */
    params: ParamDef[];
};
/**
 * A package of op function and table method definitions.
 */
export type Package = {
    /**
     * Standard function entries.
     */
    functions?: {
        [name: string]: Function;
    };
    /**
     * Aggregate function entries.
     */
    aggregateFunctions?: {
        [name: string]: import("./op/aggregate-functions").AggregateDef;
    };
    /**
     * Window function entries.
     */
    windowFunctions?: {
        [name: string]: import("./op/window-functions").WindowDef;
    };
    /**
     * Table method entries.
     */
    tableMethods?: {
        [name: string]: Function;
    };
    /**
     * Verb entries.
     */
    verbs?: {
        [name: string]: VerbDef;
    };
};
/**
 * An object containing an extension package.
 */
export type PackageBundle = {
    /**
     * The package bundle.
     */
    package: Package;
};
/**
 * Options for registering new functions.
 */
export type RegisterOptions = {
    /**
     * Flag indicating if the added
     * function can override an existing function with the same name.
     */
    override?: boolean;
};
