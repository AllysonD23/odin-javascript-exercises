const repeatString = function(string, num) {
    let entireString ="";
    if (num >= 0) {
        for (i = 1; i <= num; i++) {
            entireString = entireString + string;
            
        }
        return entireString;
    } else {
        return "ERROR";
    }
   
};

// Do not edit below this line
module.exports = repeatString;
