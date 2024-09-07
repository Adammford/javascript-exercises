const palindromes = function (phrase) {

    let lowerPhrase = phrase.toLowerCase();
    let newArray = lowerPhrase.split('').filter(str => str.match(/[^_\W]+/g));
    let reversedArray = [];

    for (let i = newArray.length - 1; i >= 0; i--) {
        reversedArray.push(newArray[i]);
    }

    let isTrue = 1;

    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] !== reversedArray[i]) {
            isTrue --;
        }
    }

    if (isTrue === 1) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;





