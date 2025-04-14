const sumAll = function(int1, int2) {
    // Check to see if the arguments are numbers
    for (let i = 0; i < arguments.length; i++) {
        if (typeof(arguments[i]) != 'number' || arguments[i] < 0 || !Number.isInteger(arguments[i])) {
            return 'ERROR'
        }
    }

    // Intialize the start and end variables
    let start;
    let end;

    // Determine which argument will be the start or end value
    if (int1 > int2) {
        start = int2;
        end = int1;
    } else {
        start = int1;
        end = int2;
    }

    let sum = 0;

    for (; start <= end; start++) {
        sum += start;
    }
    
    return sum;
};

sumAll(2, '3');

// Do not edit below this line
module.exports = sumAll;
