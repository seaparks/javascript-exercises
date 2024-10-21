const removeFromArray = function(arr, ...remove) {
    return arr.filter(val => !remove.includes(val) )
};

// Do not edit below this line
module.exports = removeFromArray;
