const sentence = 'statssss';

function isPalindrom(word) {
  const reversed = word.split('').reverse().join('');
  console.log(word, reversed);
  const result = word === reversed;
  return result;
}

module.exports = {
  sentence,
  isPalindrom,
};
