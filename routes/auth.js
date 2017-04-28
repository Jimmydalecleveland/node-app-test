const passport = require('passport');
const router = require('express').Router();

router
  .get('/signup', (req, res, next) => {
    res.render('signup');
  })
  .post('/signup', passport.authenticate('local-register', {
    successRedirect: '/allPosts',
    failureRedirect: '/signup'
  }))
  .get('/login', (req, res, next) => {
    res.render('login', {
      title: 'Sign In'
    })
  })
  .post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
  }))
  .get('/logout', (req, res, next) => {
    req.session.destroy(err => {
      res.redirect('/login');
    })
  })
;

module.exports = router;