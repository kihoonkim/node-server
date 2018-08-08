const express = require('express');
const router = express.Router();

router.post('/', function(req, res, next) {
  let imageFile = req.files.file;

  imageFile.mv(`${__dirname}/public/${req.body.filename}`, err =>{
    if (err) {

      console.log(err);
      return res.status(500).send(err);
    }

    res.json({file: `public/${req.body.filename}`});
  });
});

module.exports = router;
