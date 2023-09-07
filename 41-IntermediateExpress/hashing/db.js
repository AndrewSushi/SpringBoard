/** Database for auth-api demo. */
const { Client } = require("pg");
const { DB_URI } = require("./config");

const client = new Client({
  host: "/var/run/postgresql/",
  database: "lunchly"
});

client.connect();


module.exports = client;
