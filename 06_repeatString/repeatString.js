const repeatString = function(string, num) {
    for (let i = 0; i <= num; i++) {
        return Array(num + 1).join(string)
    }
};

let result = repeatString('hey', 3)

console.log(result)

// Do not edit below this line
module.exports = repeatString;
