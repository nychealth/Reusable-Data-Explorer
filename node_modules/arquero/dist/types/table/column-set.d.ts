export default function _default(table: any): ColumnSet;
declare class ColumnSet {
    constructor(data: any, names: any);
    data: any;
    names: any;
    add(name: any, values: any): any;
    has(name: any): any;
    "new"(): this;
    filter: any;
    groups: any;
    order: any;
    groupby(groups: any): this;
}
export {};
