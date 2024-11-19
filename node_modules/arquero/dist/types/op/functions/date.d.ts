declare namespace _default {
    export function format_date(date: any, shorten: any): string;
    export function format_utcdate(date: any, shorten: any): string;
    export function timestamp(date: any): number;
    export function year(date: any): number;
    export function quarter(date: any): number;
    export function month(date: any): number;
    export function date(date: any): number;
    export function dayofweek(date: any): number;
    export function hours(date: any): number;
    export function minutes(date: any): number;
    export function seconds(date: any): number;
    export function milliseconds(date: any): number;
    export function utcyear(date: any): number;
    export function utcquarter(date: any): number;
    export function utcmonth(date: any): number;
    export function utcdate(date: any): number;
    export function utcdayofweek(date: any): number;
    export function utchours(date: any): number;
    export function utcminutes(date: any): number;
    export function utcseconds(date: any): number;
    export function utcmilliseconds(date: any): number;
    export { datetime };
    export { dayofyear };
    export { week };
    export { utcdatetime };
    export { utcdayofyear };
    export { utcweek };
    export let now: () => number;
}
export default _default;
/**
 * Function to create a new Date value.
 * If no arguments are provided, the current time is used.
 * @param {number} [year] The year.
 * @param {number} [month=0] The (zero-based) month.
 * @param {number} [date=1] The date within the month.
 * @param {number} [hours=0] The hour within the day.
 * @param {number} [minutes=0] The minute within the hour.
 * @param {number} [seconds=0] The second within the minute.
 * @param {number} [milliseconds=0] The milliseconds within the second.
 * @return {date} The resuting Date value.
 */
declare function datetime(year?: number, month?: number, date?: number, hours?: number, minutes?: number, seconds?: number, milliseconds?: number, ...args: any[]): number;
declare function dayofyear(date: any): number;
declare function week(date: any, firstday: any): number;
/**
 * Function to create a new Date value according to UTC time.
 * If no arguments are provided, the current time is used.
 * @param {number} [year] The year.
 * @param {number} [month=0] The (zero-based) month.
 * @param {number} [date=1] The date within the month.
 * @param {number} [hours=0] The hour within the day.
 * @param {number} [minutes=0] The minute within the hour.
 * @param {number} [seconds=0] The second within the minute.
 * @param {number} [milliseconds=0] The milliseconds within the second.
 * @return {date} The resuting Date value.
 */
declare function utcdatetime(year?: number, month?: number, date?: number, hours?: number, minutes?: number, seconds?: number, milliseconds?: number, ...args: any[]): number;
declare function utcdayofyear(date: any): number;
declare function utcweek(date: any, firstday: any): number;
