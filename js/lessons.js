'use strict';

// new RegExp('pattern', 'flags');
// /pattern/flags

// Flags
// i - ищем независимо от регистра
// g - поиск нескольких вхождений
// m - многострочный режим

// Class
// \d - цифры
// \w - слова, буквы
// \s - пробелы

// \D - не цифры
// \W - не буквы

// const ans = prompt('Введите число');

// const reg = /\d/g;

// console.log(ans.match(reg));
// console.log(ans.search(reg)); // ищет одно вхождение
// console.log(ans.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/./g, "*"));
// console.log(pass.replace(/\./g, "*"));

// console.log('12-34-56'.replace(/-/g, ':'));

const str = 'My name is R2D2';

console.log(str.match(/\D/ig));

