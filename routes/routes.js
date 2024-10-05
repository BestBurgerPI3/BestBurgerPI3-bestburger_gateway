const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploads.js');
const { processImage, getBase64Image } = require('../controllers/controllers.js');

router.post('/comment', upload.single('image'), processImage, (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        // Error de Multer
        return res.status(500).json({ error: `Multer error: ${err.message}` });
    }
    if (err) {
        return res.status(500).json({ error: `Error general: ${err.message}` });
    }
    next();
});

router.get('/base64-comment', getBase64Image);

module.exports = router;
