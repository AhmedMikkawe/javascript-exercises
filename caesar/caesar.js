const caesar = function(str, key) {
    return str.split('').map(char => shiftChar(char, key)).join('');
};
const codeSet = code => (code < 97 ? 65 : 97);
const mod = (n, m) => (n % m + m) % m;

const shiftChar = (char, key) => {
    const code = char.charCodeAt();
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        return String.fromCharCode(mod(code + key - codeSet(code), 26) + codeSet(code));
    }
    return char;
}
module.exports = caesar
