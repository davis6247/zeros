module.exports = function getZerosCount(number) {   
    var zeros = 0;
    for(var i = 5; i  < number; i *= 5){
      zeros += Math.floor(number / i); 
    }

    return zeros;
}

