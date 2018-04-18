const randonNumber = require('random-number')

function randomItem(array) {
    const randIndex = randonNumber({
        min: 0,
        max: array.length - 1,
        integer: true
    })

    return array[randIndex]
}

module.exports = randomItem;