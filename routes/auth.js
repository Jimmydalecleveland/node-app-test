const router = require('express').Router();

router
  .get('/login', (req, res, next) => {
    res.render('login', {
      title: 'Sign In'
    })
  })
  // .post('/login', passport.authenticate('local', {
  //   successRedirect: '/',
  //   failureRedirect: '/login',
  // }))
  .get('/logout', (req, res, next) => {
    req.session.destroy(err => {
      res.redirect('/login');
    })
  })
;

module.exports = router;