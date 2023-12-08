const repeatString = function(str, num) {
    
    let strToReturn = "";
    let i = 0;

    if(num >= 0){
        while(i != num){
            strToReturn = `${strToReturn}${str}`;
            i++
        }
    } else {
        strToReturn = 'ERROR';
    }
    
    return strToReturn;
};

// Do not edit below this line
module.exports = repeatString;
