const removeFromArray = function(test, ...remove) {
    let testArray = [... new Set(test)];
    let toRemove = [...remove];

    for (let i = 0; i < toRemove.length; i++) {
        let index = toRemove[i];
            if (testArray.includes(index)) {
            testArray.splice(testArray.indexOf(index), 1);
            }
    }

    return testArray;
};

// Do not edit below this line
module.exports = removeFromArray;
