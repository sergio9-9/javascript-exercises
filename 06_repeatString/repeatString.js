const repeatString = function(string, num) {
    stringRepeated = '';

    if (num < 0) {
        stringRepeated = 'ERROR';
    } else if (num >= 0) {
        for (let i = 0; i < num; i++) {
        stringRepeated += string;
        }
    }

    return stringRepeated;
};

// Do not edit below this line
module.exports = repeatString;
