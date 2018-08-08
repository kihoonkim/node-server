const config = require('config');
const FacebookStrategy = require('passport-facebook').Strategy;

const facebook = config.get('federations.facebook');

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    console.log('serializeUser');
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    console.log('deserializeUser');
    done(null, user);
  });

  passport.use(new FacebookStrategy({
      clientID: facebook.clientID,
      clientSecret: facebook.clientSecret,
      profileFields: ['id', 'displayName', 'photos'],
      callbackURL: 'http://localhost:3000/auth/facebook/callback'
    },

    function (accessToken, refreshToken, profile, done) {
      const socialId = profile.id;
      const nickname = profile.displayName;
      const profileImageUrl = profile.photos[0].value;

      console.log(socialId, nickname, profileImageUrl);
      done(null, profile);
    }
  ));
};