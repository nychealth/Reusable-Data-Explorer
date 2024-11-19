declare namespace _default {
    export let row_number: WindowDef;
    export { rank };
    export let avg_rank: WindowDef;
    export let dense_rank: WindowDef;
    export let percent_rank: WindowDef;
    export { cume_dist };
    export let ntile: WindowDef;
    export let lag: WindowDef;
    export let lead: WindowDef;
    export let first_value: WindowDef;
    export let last_value: WindowDef;
    export let nth_value: WindowDef;
    export let fill_down: WindowDef;
    export let fill_up: WindowDef;
}
export default _default;
/**
 * Initialize a window operator.
 */
export type WindowInit = () => void;
/**
 * Retrieve an output value from a window operator.
 */
export type WindowValue = (state: WindowState) => any;
/**
 * An operator instance for a window function.
 */
export type WindowOperator = {
    /**
     * Initialize the operator.
     */
    init: AggregateInit;
    /**
     * Retrieve an output value.
     */
    value: AggregateValue;
};
/**
 * Create a new window operator instance.
 */
export type WindowCreate = (...params: any[]) => WindowOperator;
/**
 * An operator definition for a window function.
 */
export type WindowDef = {
    /**
     * Create a new operator instance.
     */
    create: AggregateCreate;
    /**
     * Two-element array containing the
     * counts of input fields and additional parameters.
     */
    param: number[];
};
declare namespace rank {
    function create(): {
        init: () => number;
        value: (w: any) => any;
    };
    let param: any[];
}
declare namespace cume_dist {
    export function create(): {
        init: () => number;
        value: (w: any) => number;
    };
    let param_1: any[];
    export { param_1 as param };
}
