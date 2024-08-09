const reverseString = function(str) {
    var splitString = str.split("");
    var reverseString = splitString.reverse();
    var joinString = reverseString.join("");

    return joinString;
};

// Do not edit below this line
module.exports = reverseString;
