const passport = require('passport');
const bcrypt = require('bcrypt-nodejs');
const db = require('./db');

const LocalStrategy = require('passport-local').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;

passport.use(new LocalStrategy(authenticate));
passport.use('local-register', new LocalStrategy
  ({
    passReqToCallback: true
  }, register)
);

passport.use(new GitHubStrategy({
    clientID: '4626ef89bdd65a6025d1',
    clientSecret: 'b3e8e0804f12dc0ea1106f9a2be149345fffb412',
    callbackURL: 'http://localhost:3000/auth/github/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);
    db('users')
      .where('oauth_provider', 'github')
      .where('oauth_id', profile.username)
      .first()
      .then(user => {
        if (user) {
          return done(null, user);
        }

        const newUser = {
          username: profile.username,
          oauth_provider: 'github',
          oauth_id: profile.username
        };

        return db ('users')
          .insert(newUser)
          .then(ids => {
            newUser.id = ids[0]
            done(null, newUser)
          })
      })
    ;
  }
));

function authenticate(username, password, done) {
  db('users')
    .where('username', username)
    .first()
    .then(user => {
      if (!user || !bcrypt.compareSync(password, user.password)) {
        return done(null, false, { message: 'Incorrect username or password.' });
      }

      done(null, user);
  }, done);
}

function register(req, username, password, done) {
  db('users')
    .where('username', username)
    .first()
    .then(user => {
      if (user) {
        return done(null, false, { message: 'an account with that name already exists' });
      }

      if (password !== req.body.password2) {
        return done(null, false, { message: 'passwords do not match'});
      }

      const newUser = {
        username: req.body.username,
        password: bcrypt.hashSync(password)
      };

      db('users')
        .insert(newUser)
        .then(ids => {
          newUser.id = ids[0]
          done(null, newUser)
        });
    });
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