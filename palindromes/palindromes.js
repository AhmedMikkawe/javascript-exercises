const palindromes = function(string) {
    let newString = string.toLowerCase().replace(/[^A-Za-z]/g, "");
    let array = newString.split('');
    let arrayReversed = array.reverse().join('');
    if (arrayReversed == newString) {
        return true;
    } else{
        return false;
    }
    
};

module.exports = palindromes;
