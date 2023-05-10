const getDB = require('../database/db')


const confirmMail = async (req, res) => {
    try {
        const connection = await getDB();
        const [response] = await connection.query(`UPDATE  users SET active ='1' WHERE id = '${req.params.id}'`);
        console.log(response);
        if (response.affectedRows > 0) {
            res.send('Usuario activado con exíto')
        } else {
            res.send('Algo ha ido mal :( ')
        }
    } catch (error) {
        console.log(error)
    }

}
module.exports = confirmMail