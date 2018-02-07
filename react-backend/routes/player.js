let db = require("../db/queries");
var express = require("express");
var router = express.Router();
const { loginRequired } = require("../auth/helpers");

router.get("/", loginRequired, db.getSingleUser);
router.post("/login", db.loginUser);
router.post("/new", db.registerPlayer);
router.get("/logout", loginRequired, db.logoutUser);

module.exports = router;
