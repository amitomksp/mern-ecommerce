const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt');
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  //TODO : this is temporary token for testing without cookie
  token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YTQ4NTRmNmJmODIyNTMxN2QzYjhlMiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzIyMDU5NDE0fQ.gn856dwYFzH6VSm2u6rBrNXWZbH3WxHlR6YiswtUMkA"
  return token;
};