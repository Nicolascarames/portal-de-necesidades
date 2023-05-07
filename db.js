
const mysql = require( 'mysql2/promise');
let pool;
 async function DBconn(){
    
    if(!pool){
       pool = mysql.createPool({
            host: 'sql7.freemysqlhosting.net',
            user: 'sql7616548',
            password:'8k69edajhZ',
            database: 'sql7616548',
            port:3306
        })
    }
    return await pool.getConnection()
 }
 
module.exports = DBconn