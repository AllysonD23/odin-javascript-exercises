const reverseString = function(string) {
    let reversedString = "";
    //console.log(string.length);
    for (i = string.length; i >= 0; i--) {
       reversedString = reversedString + string.charAt(i);
    }
    return reversedString;
};

reverseString('olleH');

// Do not edit below this line
module.exports = reverseString;
