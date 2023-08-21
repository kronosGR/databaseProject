var express = require('express');
const UserService = require('../services/UserService');
const db = require('../models');

var router = express.Router();
const userService = new UserService(db);

/* GET users listing. */
router.get('/:userId', async function (req, res, next) {
  const user = await userService.getOne(req.params.userId);
  res.render('userDetails', { user: user });
});

module.exports = router;
