let db = require("../db/queries");
var express = require("express");
var router = express.Router();
const { loginRequired } = require("../auth/helpers");

router.get("/", loginRequired, db.getSinglePlayer);
router.post("/new", db.registerPlayer);
router.post("/login", db.loginUser);
router.get("/logout", loginRequired, db.logoutuser);

module.exports = router;
