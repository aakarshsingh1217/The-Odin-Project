const removeFromArray = function(array, ...targets) {
    return Array.from(array).filter(item => !targets.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
