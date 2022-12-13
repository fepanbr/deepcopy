const copyObjectDeep = function (target) {
    // null || primitive
    if (typeof target !== 'object' || target === null) return target;

    // Object
    if (typeof target[Symbol.iterator] !== 'function') {
        const result = {};
        for (const prop in target) {
            result[prop] = copyObjectDeep(target[prop]);
        }
        return result;
    }

    // map
    if (target instanceof Map) {
        const result = new Map();
        for (const [k, v] of target.entries()) {
            result.set(k, copyObjectDeep(v));
        }
        return result;
    }

    // set
    if (target instanceof Set) {
        const result = new Set();
        for (const [v] of target.entries()) {
            result.add(copyObjectDeep(v));
        }
        return result;
    }

    // array
    if (target instanceof Array) {
        return target.map((v) => copyObjectDeep(v));
    }
};

module.exports = copyObjectDeep;
