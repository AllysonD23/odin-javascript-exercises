const palindromes = function (string) {
    let punctuationLess = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let array = punctuationLess.split('');
    console.log(array);
    let reversedArray = array.reverse();
    console.log(reversedArray);
    // for (i = 0; i <= array.length; i++) {
        let palindromesCheck = (array) => array == reversedArray;
        console.log(array.every(palindromesCheck));
        // if (array[i] != reversedArray[i]) {
        //     return false;
        // } else return true;
// }
};

// Do not edit below this line
module.exports = palindromes;
