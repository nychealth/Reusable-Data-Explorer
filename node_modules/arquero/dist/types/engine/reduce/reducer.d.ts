/**
 * Abstract class for custom aggregation operations.
 */
export default class Reducer {
    constructor(outputs: any);
    _outputs: any;
    size(): any;
    outputs(): any;
    init(): {};
    add(): void;
    rem(): void;
    write(): void;
}
