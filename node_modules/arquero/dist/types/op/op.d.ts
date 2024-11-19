export default function _default(name: any, fields?: any[], params?: any[]): Op;
export class Op {
    constructor(name: any, fields: any, params: any);
    name: any;
    fields: any;
    params: any;
    toString(): string;
    toObject(): {
        expr: string;
        func: boolean;
    };
}
