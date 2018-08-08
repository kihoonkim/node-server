const { User: UserRepository } = require('../models');

function findAll() {
  return UserRepository.findAll();
}

module.exports = {
  findAll
};