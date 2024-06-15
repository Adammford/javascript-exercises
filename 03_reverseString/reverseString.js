const reverseString = function() {
    let testArray = [... new Set(test)];
    let toRemove = [...remove];

    
    for (let i = 0; i < toRemove.length; i++) {
        let index = toRemove[i];
        if (testArray[i] === testArray.indexOf(index));
            testArray.splice(testArray.indexOf(index), 1);
    }

    return testArray;

};

// Do not edit below this line
module.exports = reverseString;
