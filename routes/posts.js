const passport = require('passport');
const router = require('express').Router();
const db = require('../db');

router
  .get('/allPosts', (req, res, next) => {
    db('posts')
      .then(posts => {
        res.render('posts', {
          title: 'All Users Posts',
          posts: posts
        })
      })
  })

module.exports = router;