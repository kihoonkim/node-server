var express = require('express');
var router = express.Router();
const passport = require('passport');

// 페이스북 로그인 시작
router.get('/facebook', passport.authenticate('facebook'));

// 페이스북 로그인 결과 콜백
router.get('/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/auth/login_success',
    failureRedirect: '/'
}));

router.get('/login_success', function(req, res){
  res.send(req.user);
});

router.get('/logout', function(req, res){
  res.send("log out")
});

module.exports = router;
