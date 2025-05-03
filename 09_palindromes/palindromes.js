const palindromes = function (str) {
    const strFormatted = str.toLowerCase().replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '').replace(/\s+/g, "");
    const strReverse = strFormatted.split('').reverse().join('');

    console.log(strFormatted);
    console.log(strReverse);

    if (strFormatted === strReverse) {
        return true;
    } else {
        return false;
    }
};

palindromes('A car, a man, a maraca.')

// Do not edit below this line
module.exports = palindromes;
