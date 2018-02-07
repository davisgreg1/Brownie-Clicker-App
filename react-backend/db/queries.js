const db = require("./index");
const authHelpers = require("../auth/helpers");
const passport = require("../auth/local");

function getAllPlayers(req, res, next) {
  db
    .any("select * from players")
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Retrieved ALL users"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

function loginUser(req, res, next) {
  passport.authenticate("local", (err, user, info) => {
    console.log("USER ISSSS:", user)
    if (err) {
      res.status(500).send("error while trying to log in");
      //if the user object if falsy send a '401 Unauthorized Error'
    } else if (!user) { 
      res.status(401).send("invalid username/password");
      // if the user object checks out, use the passport built in function 'logIn' to establish a login session
    } else if (user) {
      req.logIn(user, function(err) {
        if (err) {
          res.status(500).send("error");
        } else {
          res.status(200).send(user);
        }
      });
    }
  })(req, res, next);
}

function getSingleUser(req, res, next) {
  db
    .any("select * from players where username = ${username}", req.user)
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Fetched one user"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

function registerPlayer(req, res, next) {
  return authHelpers
    .createUser(req)
    .then(response => {
      passport.authenticate("local", (err, user, info) => {
        if (user) {
          res.status(200).json({
            status: "success",
            data: user,
            message: "Registered one user"
          });
        }
      })(req, res, next);
    })
    .catch(err => {
      res.status(500).json({
        status: "error",
        error: err
      });
    });
}

function logoutUser(req, res, next) {
  req.logout();
  res.status(200).send("log out success");
}

module.exports = {
  getSingleUser: getSingleUser,
  registerPlayer: registerPlayer,
  loginUser: loginUser,
  logoutUser: logoutUser
};
