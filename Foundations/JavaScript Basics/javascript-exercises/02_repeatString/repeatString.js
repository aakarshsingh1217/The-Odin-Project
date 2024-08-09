const repeatString = function(string, num) {
    if (num < 0) return 'ERROR';
    let starterString = '';
    for(i = 0; i < num; i++) {
        starterString += string;
    }

    return starterString;
};

// Do not edit below this line
module.exports = repeatString;
