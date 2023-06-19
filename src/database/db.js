const env = require('dotenv').config();
const mysql = require('mysql2/promise');

const host = process.env.host || 'localhost';
const user = process.env.user || 'root';
const password = process.env.password || 'root';
const database = process.env.database || 'portal-de-necesidades';
const port = process.env.port || 3306;
// console.log(host, user, password, database, port);

let pool;

async function DBconn() {
  if (!pool) {
    pool = mysql.createPool({
      connectionLimit: 10,
      host: host,
      user: user,
      password: password,
      database: database,
      port: port,
    });
  }
  return await pool.getConnection();
}

module.exports = DBconn;
