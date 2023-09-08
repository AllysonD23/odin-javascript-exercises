// Create a function that removes unlimited specified items (argument 2) in an array (argument 1).

    const removeFromArray = function(array, ...args) {
        let result = array;
        for (let i = 0; i <= args.length; i++) {
        result = result.filter((item) => item !== args[i]); 
        }
            return result;
    };
    
removeFromArray([1, 2, 3, 4], 3, 2);

// Do not edit below this line
module.exports = removeFromArray;
