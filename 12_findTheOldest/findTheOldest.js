const findTheOldest = function(people) {
    
    let birth = people.map((age) => age.yearOfBirth);
    let death = people.map((age) => age.yearOfDeath);
    let age = [];
    let oldest = 0;
    for (let i = 0; i < people.length; i++) {
        age.push(death[i] - birth[i]);
    }

    for (let i = 0; i < age.length; i++) {
        if (age[i] > oldest) {
            oldest = age[i];
        }
    }
    return people[age.indexOf(oldest)];

};

// Do not edit below this line
module.exports = findTheOldest;
