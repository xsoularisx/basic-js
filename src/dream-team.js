/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false
  } else {
    let filteredMembers = members.filter(item => typeof item === 'string' && item.length >= 1)
    let dreamMembers = filteredMembers.map(item => item.trim()[0].toUpperCase()).sort().join('')
    return dreamMembers
  }
}

module.exports = {
  createDreamTeam
};
