/*
* Async Iterators
*
*/
const createStore = require('./mock-api');

const store = createStore();
store.get('customer', 1);