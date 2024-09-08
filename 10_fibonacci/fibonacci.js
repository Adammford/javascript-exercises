

const fibonacci = function(num) {
    let fibArray = [0, 1];
    if (num < 0) {
        return "OOPS";
    } else {
        for (let i = 0; i < num; i++) {
        fibArray.push(fibArray[i] + fibArray[i + 1]);
        }
        return fibArray[num];
    }
};

// Do not edit below this line
module.exports = fibonacci;
