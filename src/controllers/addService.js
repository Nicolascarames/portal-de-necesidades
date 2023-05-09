const getDB = require('../database/db');
const fs = require('fs')
const path = require('path')

const AddService = async (req, res) => {

  try {

    const { title, description } = req.body;

    if (!title || !description) {
      if (req.file) {
        fs.unlinkSync(path.join(__dirname + '/../users/services' + req.file.filename)), (err) => { if (err) { console.log(err); return } };
        res.send('se necesita un titulo y una explicación para crear un nuevo servicio ');
        return
      }
    } else {
      if (req.file) {
        //si hay un titulo , descripcion ,file guardo el todo en la tabla servicios
        const fileName = req.file.filename;
        const userId = req.isUser.id;
        const connection = await getDB();

        const [response] = await connection.query(`INSERT INTO servicios(titulo,descripcion,fichero,user_id) VALUES(?,?,?,? )`, [title, description, fileName, userId])
        connection.release();

        //conpruebo que la query se hizo correctamente

        response.affectedRows > 0 ?
          res.send(`servicio creado corectamente!`) :
          res.send('Problema con la conexión con la base de datos :( porfavor,vuelve a intentarlo');

      } else {
        //si solo  hay un titulo y una descripcion guardo las dos  en la tabla servicios sin la imagen

        const userId = req.isUser.id;
        const connection = await getDB();
        const [response] = await connection.query(`INSERT INTO servicios(titulo,descripcion,user_id) VALUES(?,?,?)`, [title, description, userId])
        connection.release();
        //conpruebo que la query se hizo correctamente
        response.affectedRows > 0 ?
          res.send(`servicio creado corectamente!`) :
          res.send('Problema con la conexión con la base de datos :( porfavor,vuelve a intentarlo')

      }
    }

  } catch (error) {
    console.log(error);
  }
};

module.exports = AddService;
