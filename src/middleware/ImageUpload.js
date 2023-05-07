const multer = require('multer');
const { dirname } = require('path');
const { fileURLToPath } = require('url');
const path = require('path');
const { v4: uuidv4 } = require('uuid');


const storage = multer.diskStorage({
    destination: path.join(__dirname+ '/../users/images'),
    filename:(req,file,cb)=>{
     
            cb(null,uuidv4() + path.extname(file.originalname));
        
       

    }
})

const Upload = multer({
    storage: storage,
    dest: path.join(__dirname+ '../users/images'),
 
    limits:{fileSize: 2000000},
    fileFilter: (req,file,cb)=>{
       
        const fileTypes = /jpeg|jpg|png|gif/;
        const mimetype = fileTypes.test(file.mimetype);
       
        const extname = fileTypes.test(path.extname(file.originalname));
        if(mimetype && extname){ 
            return cb(null,true)
        }
            
            return  cb('extención no valida') 
    }
}).single('image');



module.exports = Upload