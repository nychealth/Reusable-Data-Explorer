/**
 * Create a new Arquero column that proxies access to an
 * Apache Arrow dictionary column.
 * @param {object} vector An Apache Arrow dictionary column.
 */
export default function _default(vector: object): {
    vector: any;
    length: any;
    get: (row: any) => any;
    key: (row: any) => any;
    keyFor(value: any): any;
    groups(names: any): {
        keys: any;
        get: ((k: any) => any)[];
        names: any;
        rows: number[];
        size: any;
    };
    [Symbol.iterator](): any;
};
