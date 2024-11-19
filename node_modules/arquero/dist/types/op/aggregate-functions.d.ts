declare namespace _default {
    let count: AggregateDef;
    let array_agg: AggregateDef;
    let object_agg: AggregateDef;
    let map_agg: AggregateDef;
    let entries_agg: AggregateDef;
    let any: AggregateDef;
    let valid: AggregateDef;
    let invalid: AggregateDef;
    let distinct: AggregateDef;
    let array_agg_distinct: AggregateDef;
    let mode: AggregateDef;
    let sum: AggregateDef;
    let product: AggregateDef;
    let mean: AggregateDef;
    let average: AggregateDef;
    let variance: AggregateDef;
    let variancep: AggregateDef;
    let stdev: AggregateDef;
    let stdevp: AggregateDef;
    let min: AggregateDef;
    let max: AggregateDef;
    let quantile: AggregateDef;
    let median: AggregateDef;
    let covariance: AggregateDef;
    let covariancep: AggregateDef;
    let corr: AggregateDef;
    let bins: AggregateDef;
}
export default _default;
/**
 * Initialize an aggregate operator.
 */
export type AggregateInit = (state: object) => void;
/**
 * Add a value to an aggregate operator.
 */
export type AggregateAdd = (state: object, value: any) => void;
/**
 * Remove a value from an aggregate operator.
 */
export type AggregateRem = (state: object, value: any) => void;
/**
 * Retrive an output value from an aggregate operator.
 */
export type AggregateValue = (state: object) => any;
/**
 * An operator instance for an aggregate function.
 */
export type AggregateOperator = {
    /**
     * Initialize the operator.
     */
    init: AggregateInit;
    /**
     * Add a value to the operator state.
     */
    add: AggregateAdd;
    /**
     * Remove a value from the operator state.
     */
    rem: AggregateRem;
    /**
     * Retrieve an output value.
     */
    value: AggregateValue;
};
/**
 * Create a new aggregate operator instance.
 */
export type AggregateCreate = (...params: any[]) => AggregateOperator;
/**
 * An operator definition for an aggregate function.
 */
export type AggregateDef = {
    /**
     * Create a new operator instance.
     */
    create: AggregateCreate;
    /**
     * Two-element array containing the
     * counts of input fields and additional parameters.
     */
    param: number[];
    /**
     * Names of operators required by this one.
     */
    req?: string[];
    /**
     * Names of operators required by this one
     * for streaming operations (value removes).
     */
    stream?: string[];
};
