const repeatString = function(msg, num) {
    let message = msg;
    if (num == 0) {
        return '';
    } else if(num < 0){
        return 'ERROR';
    }else {
        for (let i = 1; i < num; i++) {
            message += msg;
            
        }
        return message;
    }
    
}

module.exports = repeatString
