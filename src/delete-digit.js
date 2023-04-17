/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = n.toString();
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    if (max < str.replace(str[i], '')) {
      max = str.replace(str[i], '');
    }
  }
  return Number(max);
}

module.exports = {
  deleteDigit
};
