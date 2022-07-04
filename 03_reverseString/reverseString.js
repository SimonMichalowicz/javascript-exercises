let string = '';

const reverseString = function(string) {
    const stringArray = string.split('')
    string = stringArray.reverse()
    string = stringArray.join('')
    return string
}

// Do not edit below this line
module.exports = reverseString;
