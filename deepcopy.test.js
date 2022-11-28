const { test, describe, expect } = require('@jest/globals')
const copyObjectDeep  = require('./deepcopy')

describe("map deepCopy 테스트", () => {
    const normalMap = new Map();
    normalMap.set('hello', 'hi')
    normalMap.set('hello2', 'hi')
    normalMap.set('object', {0: 'hi'})
    normalMap.set('map', new Map([[1,1]]))
    normalMap.set('mapDeep', new Map([[1,[0,1]]]))
    normalMap.set('set', new Set([{obj:1}]))
    normalMap.set('array', [1,2,3,[4]])
    const normalMapCopyDeep = copyObjectDeep(normalMap);

    test('복사본의 모든 프로퍼티의 값이.', () => {
        expect(normalMap).toEqual(normalMapCopyDeep);
    })

    test('value가 Object인 객체가 deepcopy 되었다.', () => {
        expect(normalMap.get('object')).not.toBe(normalMapCopyDeep.get('object'))
    })
    
    test('value가 Set인 객체가 deepcopy 되었다.', () => {
        expect(normalMap.get('set')).not.toBe(normalMapCopyDeep.get('set'))
    })

    test('value가 Map인 객체가 deepcopy 되었다.', () => {
        expect(normalMap.get('map')).not.toBe(normalMapCopyDeep.get('map'))
    })

    test('value가 Map인 객체의 값이 배열이어도 deepcopy 되었다.', () => {
        expect(normalMap.get('mapDeep').get(1)).not.toBe(normalMapCopyDeep.get('mapDeep').get(1))
    })

    test('value가 Array인 객체가 deepcopy 되었다.', () => {
        expect(normalMap.get('array')).not.toBe(normalMapCopyDeep.get('array'))
    })

    test('문자열 value가 복사되었다.', () => {
        expect(normalMap.get('hello2')).toBe(normalMapCopyDeep.get('hello2'))
    })

})
