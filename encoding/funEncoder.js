// Got this from: https://github.com/flexdinesh/browser-or-node/blob/master/src/index.js

const isNode =
    typeof process !== 'undefined' &&
    process.versions != null &&
    process.versions.node != null;

// My code starts here

// To support both NodeJS and browser without errors, I added this
if (isNode) {
    // supports NodeJS
    module.exports = {
        encoder: funEncode,
        decoder: funDecode
    };
}

// A simple config to easily manage the list of supported chars
let config = {
    asciiLower: 96,
    asciiUpper: 64,
    space: 'S'
}

// There is lots of different chars I could support, but this isn't a complete encoder script anyway, it's more like a basic example
function getAsciiNum(char = 'a') {
    if (char === ' ') return config.space;

    let num = char.charCodeAt();

    if (num >= config.asciiLower && (num - config.asciiLower) <= 26) {
        return 'L' + (num - config.asciiLower);
    }

    if (num >= config.asciiUpper && (num - config.asciiUpper) <= 26) {
        return 'U' + (num - config.asciiUpper);
    }

    // Any other charcode will be ignored for now
}

// This function works pretty well as it is by avoiding "getAsciiNum" to be used too much
function funEncode(str = 'abc') {
    let res = '';
    for (let c of str) {
        if (/[A-Za-z\s]/.test(c)) {
            let val = getAsciiNum(c);
            if (typeof val === 'string') {
                res += val;
            }
        }
    }
    return res;
}

// I know this function can be improved a lot, but I made it in a simple way
function funDecode(str = 'L1') {
    let arr = str.replace(/(\D\d*)/g, '$1 ').trim().split(' '), res = '';
    for (let code of arr) {
        let data = code.split(''),
            type = data.shift(),
            num = parseInt(data.join(''));
        switch (type) {
            case 'S':
                res += ' ';
                break;
            case 'U':
                res += String.fromCharCode(num + config.asciiUpper);
                break;
            case 'L':
                res += String.fromCharCode(num + config.asciiLower);
                break;
            default:
                break;
        }
    }
    return res;
}
