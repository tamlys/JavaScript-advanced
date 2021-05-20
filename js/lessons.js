'use strict';

// function* generator() {
//     yield 'S';
//     yield 't';
//     yield 'a';
//     yield 'r';
//     yield 't';
// }

// const str = generator();

// console.log(str.next().value);
// console.log(str.next().value);
// console.log(str.next().value);
// console.log(str.next().value);
// console.log(str.next().value);

function* count(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

for (let k of count(8)) {
    console.log(k);
}

// const counter = count(7);

// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);
