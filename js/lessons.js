'use strict';

function User(name, age) {
    let userName = name;
    let userAge = age;

    this.say = function() {
        console.log(`Persone name: ${userName}, age: ${userAge}`);
    };

    this.getAge = function() {
        return userAge;
    };

    this.setAge = function(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            userAge = age;
        } else {
            console.log('Недопустимое значение');
        }
    };

    this.getName = function() {
        return userName;
    };

    this.setName = function(name) {
        userName = name;
    };
}

const ivan = new User('Ivan', 27);

console.log(ivan.userName);
console.log(ivan.userAge);

console.log(ivan.getName());
console.log(ivan.getAge());

ivan.setName('Alex');
ivan.setAge('30');

ivan.say();

// Class
class User {
    constructor(name,age) {
        this._name = name;
        this._age = age;
    }
    

    say() {
        console.log(`Persone name: ${this._name}, age: ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение');
        }
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }
}

const ivan = new User('Ivan', 27);

console.log(ivan.name);
console.log(ivan.age);

ivan.age = 99;
ivan.name = 'Alex';

ivan.say();

// Class (Эксперементальный синтаксис)
class User {
    constructor(name,age) {
        this._name = name;
        this._age = age;
    }

    #surname = 'Ivanov';
    
    say = () => {
        console.log(`Persone name: ${this._name} ${this.#surname}, age: ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение');
        }
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get surname() {
        return this.#surname;
    }

    set surname(surname) {
        this.#surname = surname;
    }
}

const ivan = new User('Ivan', 27);

console.log(ivan.surname);

ivan.surname = 'Petrov';

console.log(ivan.surname);
ivan.say();