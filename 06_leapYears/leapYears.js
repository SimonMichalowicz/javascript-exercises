const leapYears = function(year) {

    if(year % 4 == 0){

        let leapYear = year

        if(leapYear % 400 !== 0 && leapYear % 100 == 0) {
            
            return false;
        }
        else {
            return true;
        }
    }
    else return false;
};

// Do not edit below this line
module.exports = leapYears;
