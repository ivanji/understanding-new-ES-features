const dragons = [
    'cool dragon',
    'angry dragon',
    'nasty dragon'
    ]
  
const iterator = dragons[Symbol.iterator]()
iterator

iterator.next()//?
iterator.next()//?
iterator.next()//?
iterator.next()//?

for (const char of dragons[0]) {
    char
}