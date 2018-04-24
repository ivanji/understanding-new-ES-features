//? = refers to Quokka.js

/*
* Generator Functions: A new feature in ES6 that allows for a function to generate many values over time
* by returning an object which can be iterated over to pull values from the function one value at a time.
*
* Calling a Generator does NOT immediately run it. Instead it gives us an iterator on which we can call next()
*
*/

const makeDragon = require('./make-dragons');

// Approach one:
const dragonArmy = {
    [Symbol.iterator]: function*() {
        while(true) {
            const enoughDragonsSpawned = Math.random() > 0.75
            if (enoughDragonsSpawned) return
            yield makeDragon()
        }
    }
};

for (const dragon of dragonArmy) {
    dragon //?
}

// Approach 2:
function* someDragons() {
    yield 'Dragon Member'
    yield 'Dragon Officer'
    yield 'Dragon General'

    if (Math.random() > 0.5)
        return
    yield 'Dragon the Liutenant'
}

const iterator = someDragons(); // Iterator
iterator.next(); // {value: 'Dragon Member', done: false}
iterator.next(); // {value: 'Dragon Officer', done: false}
iterator.next(); //? {value: 'Dragon General', done: false}
iterator.next(); //? { value: undefined, done: true }


// Approach 3: Let's build the same using normal functions
function someDragons2() {
    let iterations = -1;

    const iterator = {
        next: () => {
            iterations++;
            if (iterations === 0)
                return { value: 'Dragon Member', done: false};


            if (iterations === 1)
                return { value: 'Dragon Officer', done: false};


            if (iterations === 2) {
                if (Math.random() > 0.75) {
                    return { value: 'Dragon the Lieutenant', done: true}
                }

            }
            return { done: true}
        }
    }

    return iterator;
}

const iterator2 = someDragons2();

iterator2.next(); //?
iterator2.next(); //?
iterator2.next(); //?
