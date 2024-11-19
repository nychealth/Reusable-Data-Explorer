/**
 * Check if an aggregate function with the given name exists.
 * @param {string} name The name of the aggregate function.
 * @return {boolean} True if found, false otherwise.
 */
export function hasAggregate(name: string): boolean;
/**
 * Check if a window function with the given name exists.
 * @param {string} name The name of the window function.
 * @return {boolean} True if found, false otherwise.
 */
export function hasWindow(name: string): boolean;
/**
 * Check if an expression function with the given name exists.
 * @param {string} name The name of the function.
 * @return {boolean} True if found, false otherwise.
 */
export function hasFunction(name: string): boolean;
/**
 * Get an aggregate function definition.
 * @param {string} name The name of the aggregate function.
 * @return {AggregateDef} The aggregate function definition,
 *  or undefined if not found.
 */
export function getAggregate(name: string): AggregateDef;
/**
 * Get a window function definition.
 * @param {string} name The name of the window function.
 * @return {WindowDef} The window function definition,
 *  or undefined if not found.
 */
export function getWindow(name: string): WindowDef;
/**
 * Get an expression function definition.
 * @param {string} name The name of the function.
 * @return {Function} The function instance, or undefined if not found.
 */
export function getFunction(name: string): Function;
import functions from './functions';
import aggregateFunctions from './aggregate-functions';
import windowFunctions from './window-functions';
export { functions, aggregateFunctions, windowFunctions };
