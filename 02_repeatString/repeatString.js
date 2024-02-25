const numOfTimes = Math.floor(Math.random() * 30);

const repeatString = function(word, numOfTimes) {
    if (numOfTimes >= 0) {
    return word.repeat(numOfTimes);
    } else {
        return "ERROR";
    }
};
console.log(repeatString);
// Do not edit below this line
module.exports = repeatString;
