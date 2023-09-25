const palindromes = function (string) {
    // Remove all punctuation and spaces
    let punctuationLess = string.replace(/[\W_]/g, '');
    //console.log(punctuationLess)
    // Lower case all letters 
    let lowerCase = punctuationLess.toLowerCase();
    //console.log(lowerCase)
    // Create an array from the string with each letter as an item
    let array = lowerCase.split('');
    //console.log(array);
    // Reverse the array and join into a string
    let reversedString = array.reverse().join('');
    //console.log(reversedString);

    if (lowerCase === reversedString) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
