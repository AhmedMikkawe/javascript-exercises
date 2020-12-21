const reverseString = function(str) {
    let splitted = str.split('');
    splitted.reverse();
    let newString = splitted.join("");
    
    return newString;
}

module.exports = reverseString
