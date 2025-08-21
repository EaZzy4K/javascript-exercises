// Removes only one occurance at once: [1, 2, 3, 3, 4] => [1, 2, 3, 4]
const removeFromArray = function(array, item) {
    let index = array.indexOf(item);
    if (array.includes(item)) {
        array.splice(index, 1)
    }
    return array
};

arrNumbers = [1, 2, 3, 4];
console.log(removeFromArray(arrNumbers, 3))

// Removes all occurances: [1, 2, 3, 3, 4] => [1, 2, 4]
const removeFromArray2 = function(array, ...items) {
    return array.filter(function(value) {
        if (!items.includes(value)) {
            return array
        }
    })
}

arrNumbers2 = [1, 2, 3, 3, 4];
console.log(removeFromArray2(arrNumbers2, 3))

// Do not edit below this line
module.exports = removeFromArray;
