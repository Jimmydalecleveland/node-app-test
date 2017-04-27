const router = require('express').Router();

router
  .get('/login', (req, res, next) => {
    res.render('login', {
      title: 'Sign in to view your posts.'
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