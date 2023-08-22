/** Database for pg-oo */

const pg = require("pg");

const db = new pg.Client({database:"express_pg_oo", host: "/var/run/postgresql/"});

db.connect();


module.exports = db;
