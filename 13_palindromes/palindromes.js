const palindromes = function (str) {
    const reversed = str.split('').reverse().join('')
    if (reversed == str) {
        return true
    } else {
        return false
    }

};

console.log(palindromes('please help'))
console.log(palindromes('pApAp'))


// Do not edit below this line
module.exports = palindromes;
