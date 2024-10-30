const palindromes = function (string) {
    let validchars = 'abcdefghijklmnopqrstuvwxyz0123456789';

    let cleaned = string
        .toLowerCase()
        .split('')
        .filter((char) => validchars.includes(char))
        .join('');
    
    let reversed = cleaned.split('').reverse().join('');

    return reversed === cleaned;

};

// Do not edit below this line
module.exports = palindromes;
