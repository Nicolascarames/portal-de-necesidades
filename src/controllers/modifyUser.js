const getDb = require('../database/db');
const { generateError } = require('../service/generateError');

const modifyUser = async (req, res, next) => {
  console.log(req.body)
  console.log(req.isUser)
  
  try {
    
    const conexion = await getDb();

    const { nombre, username, biografia } = req.body;
    const { id } = req.isUser;
    const avatar = req.file? req.file.filename : 'default'
    

    await conexion.query(
      `
        UPDATE users
        SET nombre=?, username=?, biografia=?, avatar=?, updated_at=?
        WHERE id=?
        `, 
      [nombre, username, biografia, avatar, new Date(), id]
    );

    conexion.release();

    res.send({
      status: 'ok',
      message: 'Usuario modificado correctamente',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = modifyUser;
