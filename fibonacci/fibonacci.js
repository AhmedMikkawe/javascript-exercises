const fibonacci = function(location) {
    if (location < 0) {
        return 'OOPS';
    }
    if(location == 0){
        return 0;
    }
    let f0 = 0;
    let f1 = 1;
    for (let i = 1; i < location; i++) {
        let fN = f1;
        f1 = f0 + f1;
        f0 = fN;
    }
    return f1;
}

module.exports = fibonacci
