const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainsObj = {};

  for (let i = 0; i < domains.length; i += 1) {
    const revDomain = domains[i].split('.').reverse();
    let dnsDomain = [];

    for (let j = 0; j < revDomain.length; j += 1) {
      dnsDomain.push(revDomain[j]);
      const key = `.${dnsDomain.join('.')}`;
      domainsObj[key] = typeof domainsObj[key] === 'undefined' ? 1 : domainsObj[key] + 1;
    }
  }

  return domainsObj;
}

module.exports = {
  getDNSStats
};
