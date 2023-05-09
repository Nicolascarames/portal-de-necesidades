const AddService = async (req, res) => {
  try {
    if (req.file) {
      console.log('file recibido', req.file.filename);
      console.log('body recibido', req.body);
    } else {
      console.log('no hay file');
      console.log('body recibido', req.body);
    }
    res.send('add service listener');
    console.log('works!');
  } catch (error) {
    res.send(error);
  }
};

module.exports = AddService;
