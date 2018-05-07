/*
 * WeakMap is a new Object or data structure where keys must be objects and values can be arbitrary values.
 * It provides very important differences to Map
 *
 * Unlike object keys must be objects and values can be arbitrary values.
 * Primitive data types as keys are not allowed (e.g. a Symbol can't be a WeakMap key).
 * WeakMaps don't prevent garbage collection in case there would be no other referece to the key object.
 * WeakMap keys are not enumerable. (There's no method that will provide a list of keys,  if a list of keys is needed, use Map instead).
 *
 * WeakMap values will be garbage collected if the key reference no longer exists!!!
 * (mnemonic: You get the ability to have access to the value as long as you have access to the key!)
 *
 *
 * //?: denotes usage of quokka.js
 */


{
    let x = {
        a:[1,2]
    };

    var map = new WeakMap();
    map.set(x, 'Some value');

    map //?
}

map//? // returns empty