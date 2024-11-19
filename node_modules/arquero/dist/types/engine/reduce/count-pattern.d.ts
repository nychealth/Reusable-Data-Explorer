export default function _default(fields: any, as: any, pattern: any): CountPattern;
export class CountPattern extends Reducer {
    constructor(fields: any, as: any, pattern: any);
    _fields: ((row: any, data: any) => any)[];
    _pattern: any;
    init(): {
        index: {};
        words: any[];
        count: any[];
    };
    add({ index, words, count }: {
        index: any;
        words: any;
        count: any;
    }, row: any, data: any): void;
    rem({ index, count }: {
        index: any;
        count: any;
    }, row: any, data: any): void;
    write({ words, count }: {
        words: any;
        count: any;
    }, values: any, index: any): number;
}
import Reducer from './reducer';
