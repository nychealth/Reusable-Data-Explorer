declare namespace _default {
    function has(obj: any, key: any): any;
    function keys(obj: any): any[];
    function values(obj: any): any[];
    function entries(obj: any): any[];
    function object(entries: any): {
        [k: string]: any;
    };
}
export default _default;
