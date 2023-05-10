const getDB = require('../database/db');
const fs = require('fs')
const path = require('path')

const addComment = async (req, res) => {

  try {

    const { service_id, comment} = req.body;
    const userId = req.isUser.id;


    if (!service_id || !comment || !userId) {
      if (req.file) {
        fs.unlinkSync(path.join(__dirname + '/../users/comments/' + req.file.filename)), (err) => { if (err) { console.log(err); return } };
        res.send('ningun texto insertado o ningun id proporcionado');
        return
      }
    } else {
      if (req.file) {
        //si hay un titulo , descripcion ,file guardo el todo en la tabla servicios
        const fileName = req.file.filename;
       
        console.log(req.file)
        
        const connection = await getDB();

        const [response] = await connection.query(`INSERT INTO comentarios(user_id,comentario,fichero_comentario,servicio_id) 
        VALUES(?,?,?,? )`, [userId, comment, fileName, service_id])
        connection.release();

        //conpruebo que la query se hizo correctamente

        response.affectedRows > 0 ?
          res.send(`comentario añadido correctamente`) :
          res.send('Problema con la conexión con la base de datos :( porfavor,vuelve a intentarlo');

      } else {
        //si solo  hay un titulo y una descripcion guardo las dos  en la tabla servicios sin la imagen

        const userId = req.isUser.id;
        
        const connection = await getDB();
        const [response] = await connection.query(`INSERT INTO comentarios(user_id,comentario,servicio_id) 
        VALUES(?,?,?)`, [userId, comment,  service_id])
        connection.release();
        //conpruebo que la query se hizo correctamente
        response.affectedRows > 0 ?
          res.send(`comentario añadido correctamente`) :
          res.send('Problema con la conexión con la base de datos :( porfavor,vuelve a intentarlo')

      }
    }

  } catch (error) {
    console.log(error);
  }
};

module.exports = addComment;
