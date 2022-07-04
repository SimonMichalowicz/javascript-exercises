let string = 'hey';
let num = 0;

const repeatString = function(string, num) { 
let repeatedText = ''
    if (num < 0){
        let repeatedText = "ERROR";
        return repeatedText
    }

    else 
        for(let i = 0; i < num; i++) {
        repeatedText += string;
        }

return repeatedText

}

// Do not edit below this line
module.exports = repeatString;
