/* Understanding Iterators by creating an army of dragons */
/* MPJ Fun fun function: https://www.youtube.com/watch?v=W4brAobC2Hc */

makeDragon = require('./make-dragons');

const dragonArmy = {
    // Adding iterator interface to dragonArmy object
    [Symbol.iterator]: () => {
        return {
            next: () => { // method that will generate dragons
                const enoughDragons = Math.random() > 0.75
                if (!enoughDragons)
                return {
                    value: makeDragon(),
                    done: false
                }
                return {
                    value: 'only dragon',
                    done: true
                }
            }
        }
    }
}

for (const dragon of dragonArmy) {
    dragon //?

}