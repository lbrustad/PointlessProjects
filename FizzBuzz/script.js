/**
 * As FizzBuzz is a know basic thing to write in any programming lang,
 * and there is multiple ways to solve it, here is some in JS
 */

const config = {
    max: 20,
    fizz: 3,
    buzz: 5
}

// Readability
function readability(max = config.max) {
    for (let integer = 1; integer <= max; integer++) {
        if (integer % config.fizz === 0 && integer % config.buzz === 0) {
            console.log(integer, 'FizzBuzz');
            continue;
        }

        if (integer % config.fizz === 0) {
            console.log(integer, 'Fizz');
            continue;
        }

        if (integer % config.buzz === 0) {
            console.log(integer, 'Buzz');
            continue;
        }

        console.log(integer);
    }
}

// Readability - simpler
function readabilitySimpler(max = config.max) {
    for (let integer = 1; integer <= max; integer++) {
        let str = '';

        if (integer % config.fizz === 0) {
            str += 'Fizz';
        }

        if (integer % config.buzz === 0) {
            str += 'Buzz';
        }

        console.log(integer, str);
    }
}

// Short
function short(max = config.max) {
    for (let i = 1; i <= max; i++) {
        let str = i % config.fizz === 0 ? 'Fizz' : '';
        str += i % config.buzz === 0 ? 'Buzz' : '';
        console.log(i, str);
    }
}

// One liner
function oneLiner(max = config.max) {
    for (let i = 1; i <= max; i++) console.log(i, (i % config.fizz === 0 ? 'Fizz' : '') + (i % config.buzz === 0 ? 'Buzz' : ''));
}
