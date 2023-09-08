const sumAll = function(num1, num2) {
    let sum = 0;

    // Check if arguments are negative numbers
    if (num1 > 0) {

      if (num2 > 0) {

    // Check if arguments are numbers
        
        if (typeof num1 === "number") {

            if (typeof num2 === "number") {

            // Set i equal to lower of given arguments
            if (num1 < num2) {
               i = num1;
              higherNum = num2;
         } else {
                i = num2;
                higherNum = num1;
            }

            // Create a loop from i = num1; i = num2; i++;
            for (; i <= higherNum; i++) {
            // Add i to sum
                sum = sum + i;
            }
            // Return sum
            return sum;

            } else {
            return "ERROR"
            }

        } else {
        return "ERROR"
        }
    } else {
        return "ERROR"
    }
  } else {
    return "ERROR"
  }
};

sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10

// Do not edit below this line
module.exports = sumAll;
