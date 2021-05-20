'use strict';

try {
    console.log('Normal');
    console.log(a);
    console.log('result');
} catch (e) {
    console.log(e.name);
    console.log(e.message);
    console.log(e.stack);
} finally {
    console.log('Finish');
}

console.log('Still normal');
