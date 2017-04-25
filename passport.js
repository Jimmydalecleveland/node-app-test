const db = require('./db');
const bcrypt = require('bcrypt-nodejs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(authenticate));

function authenticate(username, password, done) {
  db('users')
    .where('username', username)
    .first()
    .then(user => {
      if (!user || !bcrypt.compare(password, user.password)) {
        return done(null, false, { message: 'Incorrect username or password.' });
      }

      done(null, user);
  }, done);
}

passport.serializeUser(function(user, done) {
  done(null, user.id)
})

passport.deserializeUser(function(id, done) {
  db('users')
    .where('id', id)
    .first()
    .then(user => {
      done(null, user)
    }, done)
})