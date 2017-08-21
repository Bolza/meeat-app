import { forEach } from 'lodash';

export function objectValuesToArray(obj) {
    let array = [];
    forEach(obj, (v, k) => {
        array.push(v);
    });
    return array;
}