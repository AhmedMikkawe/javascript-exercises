const sumAll = function(num1, num2) {
    let result = 0;
    if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 <0) {
        return 'ERROR';
    } else{
        if(num1 < num2){
            for (let i = num1; i <= num2; i++) {
                result += i;
            }
            return result;
        } else if (num1 > num2) {
            for (let i = num2; i <= num1; i++) {
                result += i;
            }
            return result;
        }
    }

}

module.exports = sumAll
