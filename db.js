const mysql = require('mysql2/promise');
const env = require('dotenv').config();
let pool;
async function DBconn() {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.host,
      user: process.env.user,
      password: process.env.password,
      database: process.env.database,
      port: process.env.port,
    });
  }
  return await pool.getConnection();
}

module.exports = DBconn;
