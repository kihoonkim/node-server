const userReposiory = require('../persistence/user-repository');

async function findAll() {
  return await userReposiory.findAll();
}
module.exports = {
  findAll
};