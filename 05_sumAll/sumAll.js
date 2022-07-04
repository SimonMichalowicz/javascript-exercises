
const sumAll = function(a, b) {
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    let total = 0;

    if(a < 0 || b < 0 || isNaN(a) || isNaN(b) || typeof a == "string" || typeof b == "string") {      
        return 'ERROR';
    }

    for(let i = min; i <= max; i++) {

        total = total + i;
    }

return total;

};

// Do not edit below this line
module.exports = sumAll;
