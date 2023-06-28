const getDb = require('../database/db');
const { generateError } = require('../service/generateError');

const markDone = async (req, res, next) => {
    let conexion;
    try {
        const { id } = req.isUser;
        conexion = await getDb();
        if (req.body.done) {
            const [check] = await conexion.query('SELECT users_id FROM servicios WHERE idservicios = ?;', [req.body.done]);
            if (check[0].users_id === id) {
                const [done] = await conexion.query('UPDATE servicios SET finalizado=1 WHERE idservicios =? ;', [req.body.done]);
                done.affectedRows > 0 ? res.status(200).send('ok') : res.status(204).send('not ok')
            } else {
                res.status(204).send('no hay permisos')
            }
        }
        if (req.body.delete) {
            const [check] = await conexion.query('SELECT users_id FROM servicios WHERE idservicios = ?;', [req.body.delete]);
            console.log(check);
            if (check[0].users_id === id){
                const [done_comm] = await conexion.query(`DELETE FROM comentarios WHERE servicios_id = ?;`,[req.body.delete] );
                console.log(done_comm);
                const [done_service] = await conexion.query(`DELETE from  servicios  WHERE idservicios = ? LIMIT 1;`,[req.body.delete] );
                console.log(done_service)
                
                done_service.affectedRows > 0 ? res.status(200).send('ok') : res.status(204).send('not ok')
            } else {
                res.status(204).send('no hay permisos')
            }
        }
     
    } catch (error) {
        next(error);
    } finally {
        if (conexion) conexion.release();
    }
};

module.exports = markDone;
