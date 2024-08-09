const sumAll = function(num1, num2) {
    let sum = 0;
    let largerNumber;

    if ((num2 < 0) || (num1 < 0) || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return 'ERROR';
    }
    else if (num1 > num2) {
        largerNumber = num1;
    } else if (num2 > num1) {
        largerNumber = num2;
    }

    for(i = 1; i < largerNumber + 1; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
