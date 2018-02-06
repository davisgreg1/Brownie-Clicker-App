var pgp = require("pg-promise")({});
var connectionString = "postgres://localhost/brownieapp";
var db = pgp(connectionString);

module.exports = db;
