//Day-1: Q- Get Object value from String/Array path
var get = function(obj, strPath) {
    if (!strPath || strPath.length === 0) {
        return;
    }
    const excludeChars = ['[',']','.'];
    let keys = [];
    for(let i=0; i<strPath.length; i++) {
        if(!excludeChars.includes(strPath[i])) {
            keys.push(strPath[i]);
        }
    }
    let result = keys.reduce((acc, key) => acc[key], obj);
    return result;
}

const obj = {
    a: {
        b: {
            c: [1,2,3]
        }
    }
}

console.log(get(obj, 'a.b.c'));
console.log(get(obj, 'a.b.c.0'));
console.log(get(obj, 'a.b.c[1]'));
console.log(get(obj, ['a', 'b', 'c', '2']));
console.log(get(obj, 'a.b.c[3]'));
console.log(get(obj, 'a.c'));