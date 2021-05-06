'use strict';

// filter
// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(name => {
//     return name.length < 5;
// });

// console.log(shortNames);

// map
// const answers = ['IvAn', 'AnnA', 'Hello'];

// const result = answers.map(item => item.toLowerCase());

// console.log(result);

// every/some
// const some = [4, 'qwerty', 'hi'];
// const numbers = [1, 2, 3, 4];

// console.log(some.some(item => typeof(item) === 'number'));
// console.log(some.every(item => typeof(item) === 'number'));
// console.log(numbers.every(item => typeof(item) === 'number'));

// reduce
// const arr = [4, 5, 1, 3, 2, 6];
// const stringArr = ['apple', 'pear', 'plum'];

// const res = arr.reduce((sum, current) => sum + current, 3);
// const stringRes = stringArr.reduce((sum, current) => `${sum}, ${current}`);

// console.log(res);
// console.log(stringRes);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);