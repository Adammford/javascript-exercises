const palindromes = function (phrase) {

    let cleanedString = phrase
        .toLowerCase()
        .split('')
        .filter(str => str.match(/[^_\W]+/g))
        .join('');
    
    let reversedString = cleanedString.split('').reverse().join('');

    return reversedString === cleanedString;

};

// Do not edit below this line
module.exports = palindromes;





