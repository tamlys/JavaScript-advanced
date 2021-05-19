'use strict';

const number = 1;

// Анонимная самовызывающаяся фукнкция
(function() {
    let number = 2;
    console.log(number);
    console.log(number + 3);
}());

console.log(number);

const user = (function() {
    const privat = function() {
        console.log("I'm private!");
    };

    return {
        sayHello: privat
    };
}());

user.sayHello();
