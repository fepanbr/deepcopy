const copyObjectDeep = function(target) {
    // null || primitive
    if(typeof target !== 'object' || target === null) return target;
    
    // Object
    let result = {};
    if(typeof target[Symbol.iterator] !== 'function') {
        for (const prop in target) {
            result[prop] = copyObjectDeep(target[prop])
        }
        return result;
    }

    // map, set, array
    if(target instanceof Map) {
        result = new Map();
            target.forEach((v, k) => {
            result.set(k, copyObjectDeep(v))
        })
        return result;
    } else if (target instanceof Set) {
        result = new Set()
        target.forEach((v) => {
            result.add(copyObjectDeep(v))
        })
        return result;
    } else if (target instanceof Array) {
        result = target.map(v => copyObjectDeep(v))
    }    
    return result;
}

module.exports = copyObjectDeep;