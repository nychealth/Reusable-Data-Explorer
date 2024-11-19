export default class ValueList {
    constructor(values: any);
    _values: any;
    _sorted: any;
    _start: number;
    values(copy: any): any;
    add(value: any): void;
    rem(): void;
    min(): any;
    max(): any;
    quantile(p: any): any;
}
