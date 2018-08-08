const router = require('express').Router();
const userService = require('../service/users-service')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(userService.findAll());
});

module.exports = router;
