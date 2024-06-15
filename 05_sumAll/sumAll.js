const sumAll = function(num1, num2) {
    let finalSum;
    if (num1 < 0 || num2 < 0) return 'ERROR';
    if (Number.isInteger(num1) && Number.isInteger(num2)) {
        if (num1 < num2) {
            for (i = 0; i < num2; i++) {
                finalSum = (num2 * (num1 + num2)) / 2
            }
        } else {
            for (i = 0; i < num1; i++) {
                finalSum = (num1 * (num2 + num1)) / 2
            }
        }
    } else {
        return finalSum = 'ERROR';
    }
    return finalSum;

};

// Do not edit below this line
module.exports = sumAll;
