const randomItem = require('./random-items');

const makeDragon = () => {
    const dragonSizes = ['big', 'small', 'tiny']
    const dragonAbilities = ['fire', 'ice', 'lightning']

    return randomItem(dragonSizes) + ' ' + 
    randomItem(dragonAbilities) + ' ' +
    'dragon'
}

module.exports = makeDragon;