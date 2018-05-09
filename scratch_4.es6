/*
 * Async Iterators
 * //?: Quokka.js
 *
 * Incomplete: still need to research and practice a bit more.
 */
const createStore = require('./mock-api');

const store = createStore();

const customers = {
    [Symbol.iterator]: function() {
        let i = 0;
        return {
            next: async function() {
                i++;
                const customer = await store.get('customer', i);

                if (!customer) {
                    return {done: true}
                }

                customer.foods = await store.get('food', i);
                return {
                    value: customer,
                    done: false
                }
            }
        }
    }
};

(async function() {
    //const iterator = customers[Symbol.iterator]();
    iterator.next() //?
        for (const customer of customers) {
            customer //?
        }
})();