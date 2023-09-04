/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client({
    host: "/var/run/postgresql/",
    database: "lunchly"
});

db.connect();

module.exports = db;
