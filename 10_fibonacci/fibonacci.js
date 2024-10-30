const fibonacci = function(n) {
    if (n == 0){ return 0 };
    if (n < 0){ return "OOPS" };

    let values = [0,1];

    for (let i = 2; i <= n; i++){
        values.push( values[i-1] + values[i-2] );
    }

    return values[n];
};

// Do not edit below this line
module.exports = fibonacci;
