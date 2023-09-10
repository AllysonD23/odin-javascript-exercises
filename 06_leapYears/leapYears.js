const leapYears = function(year) {
    // Check if year is divisible by 4 
    if (year % 4 !== 0) {
        // If no, it's not a leap year, return false
        return false;
    // If yes, check if year is divisible by 100
    } else if (year % 100 !== 0) {
        // If no, it's a leap year, return true
        return true;
    // If yes, check if year is divisible by 400
    } else if (year % 400 !== 0) {
        // If no, it's not a leap year, return false
        return false;
    } else {
        // If yes, it's a leap year, return true
        return true;
    }

};

leapYears(2000); // is a leap year: returns true
leapYears(1985); // is not a leap year: returns false

// Do not edit below this line
module.exports = leapYears;
