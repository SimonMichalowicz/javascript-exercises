const removeFromArray = function(myArray, ...removeFromArray) {
let moddedArray = [...myArray];
    for (let i = 0; i < removeFromArray.length; i++){
        if (moddedArray.includes(removeFromArray[i])){
            moddedArray.splice(moddedArray.indexOf(removeFromArray[i]), 1)
        }
    }
    return moddedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
