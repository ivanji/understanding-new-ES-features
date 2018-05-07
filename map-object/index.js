/*
 * Map is a new Object or data structure that allows for arbitrary values as keys.
 *
 * i.e. Assign multiple objects as keys within your map object.
 *
 * It offers an iterator interface
 *
 * //?: denotes usage of quokka.js
 */

const a = {};
const b = {
    num: 1
};

const map = new Map();
map.set(a, 'a'); // assign empty object a as key. String as value
map.set(b, 'b')
    .set(a, 'c'); // rewrites the previous value, as there can only one.


//map.delete(b); //?

console.log(map) //?

// Iterating an object
let iterator = map[Symbol.iterator]();
for (let [keys, value] of iterator) {
    //keys //?
    console.log(keys, value);
}

// can easily be converted into an array.
const newArray = [...map] //?

map.clear()//? // deletes all values

console.log(map) //Map is now empty