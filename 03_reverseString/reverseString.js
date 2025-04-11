const reverseString = function(text) {
    let splitText = text.split('');

    let reverseText = splitText.reverse().join('');

    return reverseText;
};

// Do not edit below this line
module.exports = reverseString;
